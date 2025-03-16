
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1';

// Required environment variables
const GOOGLE_CLIENT_EMAIL = Deno.env.get("GOOGLE_CLIENT_EMAIL") || "";
const GOOGLE_PRIVATE_KEY = Deno.env.get("GOOGLE_PRIVATE_KEY") || "";
const GA_PROPERTY_ID = Deno.env.get("GA_PROPERTY_ID") || "G-FH9J4B85LD"; // Using your GA4 property ID
const RECIPIENT_EMAIL = "quantumquestacademycanada@gmail.com";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getAnalyticsReport() {
  try {
    // In a real implementation, you would connect to the Google Analytics Data API
    // using the GA4 Data API: https://developers.google.com/analytics/devguides/reporting/data/v1
    
    // For now, we'll use a placeholder implementation that references your GA property
    const report = {
      date: new Date().toISOString().split('T')[0],
      propertyId: GA_PROPERTY_ID,
      summary: {
        totalVisitors: "Visit Google Analytics Dashboard",
        pageViews: "Visit Google Analytics Dashboard",
        avgSessionDuration: "Visit Google Analytics Dashboard",
        bounceRate: "Visit Google Analytics Dashboard",
      },
      topPages: [
        "Visit Google Analytics Dashboard for detailed information"
      ],
      deviceBreakdown: {
        desktop: "Visit dashboard for percentage",
        mobile: "Visit dashboard for percentage",
        tablet: "Visit dashboard for percentage"
      }
    };

    return report;
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    throw error;
  }
}

async function sendEmailReport(report: any) {
  try {
    // Format the report data into a nice HTML email
    const emailHtml = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h1 { color: #4a5568; }
            h2 { color: #4a5568; margin-top: 20px; }
            .stat { margin-bottom: 10px; }
            .label { font-weight: bold; }
            .value { color: #2d3748; }
            .date { color: #718096; font-style: italic; }
            .footer { margin-top: 30px; font-size: 12px; color: #718096; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Quantum Quest Academy Analytics Report</h1>
            <p class="date">Report Date: ${report.date}</p>
            <p>Google Analytics Property ID: ${report.propertyId}</p>
            
            <h2>Summary</h2>
            <div class="stat">
              <span class="label">Total Visitors:</span> 
              <span class="value">${report.summary.totalVisitors}</span>
            </div>
            <div class="stat">
              <span class="label">Page Views:</span> 
              <span class="value">${report.summary.pageViews}</span>
            </div>
            <div class="stat">
              <span class="label">Avg. Session Duration:</span> 
              <span class="value">${report.summary.avgSessionDuration}</span>
            </div>
            <div class="stat">
              <span class="label">Bounce Rate:</span> 
              <span class="value">${report.summary.bounceRate}</span>
            </div>
            
            <h2>Top Pages</h2>
            <p>${report.topPages[0]}</p>
            
            <h2>Device Breakdown</h2>
            <div class="stat">
              <span class="label">Desktop:</span> 
              <span class="value">${report.deviceBreakdown.desktop}</span>
            </div>
            <div class="stat">
              <span class="label">Mobile:</span> 
              <span class="value">${report.deviceBreakdown.mobile}</span>
            </div>
            <div class="stat">
              <span class="label">Tablet:</span> 
              <span class="value">${report.deviceBreakdown.tablet}</span>
            </div>
            
            <div class="footer">
              <p>This is an automated email from Quantum Quest Academy Analytics.</p>
              <p>For more detailed analytics, please visit your <a href="https://analytics.google.com/analytics/web/#/p${report.propertyId.replace('G-', '')}/reports/reportinghub">Google Analytics dashboard</a>.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Supabase's built-in email functionality
    console.log(`Email report would be sent to ${RECIPIENT_EMAIL}`);
    console.log("Email HTML:", emailHtml);
    
    return {
      success: true,
      message: `Analytics report would be sent to ${RECIPIENT_EMAIL}`,
      propertyId: report.propertyId
    };
  } catch (error) {
    console.error("Error sending email report:", error);
    throw error;
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const report = await getAnalyticsReport();
    const result = await sendEmailReport(report);

    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 200,
    });
  } catch (error) {
    console.error("Error in analytics-email-report function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 500,
    });
  }
});
