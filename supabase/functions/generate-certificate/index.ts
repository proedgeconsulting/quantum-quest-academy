
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";
import { Resend } from "npm:resend@1.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Initialize clients
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const resendApiKey = Deno.env.get('RESEND_API_KEY') ?? '';
    
    if (!resendApiKey) {
      throw new Error('Resend API key is required for sending emails');
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);
    
    // Get request data
    const { userId, courseId, courseName, username, email } = await req.json();
    
    if (!userId || !courseId || !email) {
      return new Response(
        JSON.stringify({ error: 'User ID, course ID, and email are required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    console.log(`Generating certificate for user: ${userId}, course: ${courseId}`);
    
    // Generate a unique certificate ID
    const certificateId = `CERT-${courseId}-${userId}-${Date.now()}`;
    
    // Create certificate record
    await supabase.from('user_certificates').insert({
      user_id: userId,
      course_id: courseId,
      certificate_id: certificateId,
      issued_at: new Date().toISOString(),
      course_name: courseName
    }).select();
    
    // Prepare the certificate HTML
    const certificateHtml = `
      <div style="border: 20px solid #4338CA; padding: 40px; max-width: 800px; margin: 0 auto; text-align: center; font-family: 'Arial', sans-serif;">
        <h1 style="color: #4338CA; margin-bottom: 20px; font-size: 36px;">Certificate of Completion</h1>
        <p style="font-size: 18px; margin-bottom: 40px;">This certifies that</p>
        <h2 style="font-size: 30px; margin-bottom: 40px; color: #111827;">${username || 'Student'}</h2>
        <p style="font-size: 18px; margin-bottom: 40px;">has successfully completed</p>
        <h3 style="font-size: 24px; margin-bottom: 40px; color: #4338CA;">${courseName || 'Quantum Physics Course'}</h3>
        <p style="font-size: 16px; margin-bottom: 10px;">Certificate ID: ${certificateId}</p>
        <p style="font-size: 16px; margin-bottom: 40px;">Issued on: ${new Date().toLocaleDateString()}</p>
        <div style="border-top: 2px solid #4338CA; padding-top: 20px;">
          <p style="font-size: 16px;">Quantum Quest Academy</p>
        </div>
      </div>
    `;
    
    // Send certificate email
    const emailResult = await resend.emails.send({
      from: 'Quantum Quest <certificates@quantumquestacademy.com>',
      to: email,
      subject: `Your ${courseName || 'Course'} Completion Certificate`,
      html: `
        <h1>Congratulations on completing ${courseName || 'your course'}!</h1>
        <p>We're thrilled to present you with your certificate of completion. Your dedication to learning quantum physics is commendable.</p>
        ${certificateHtml}
        <p style="margin-top: 20px;">You can access all your certificates from your account dashboard.</p>
        <p>Keep up the great work!</p>
        <p>The Quantum Quest Team</p>
      `,
    });
    
    console.log('Certificate email sent:', emailResult);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        certificateId,
        message: 'Certificate generated and emailed successfully'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error generating certificate:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
