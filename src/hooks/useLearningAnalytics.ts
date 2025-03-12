
import { useAnalyticsCore } from "./analytics/useAnalyticsCore";
import { useAIAssistance } from "./analytics/useAIAssistance";
import { usePersonalizedQuiz } from "./analytics/usePersonalizedQuiz";
import { useCertificates } from "./analytics/useCertificates";
import { useNotifications } from "./analytics/useNotifications";
import { LearningAnalytics, StreakInfo } from "./types/analyticsTypes";

export type { LearningAnalytics, StreakInfo };

export const useLearningAnalytics = (userId: string | undefined) => {
  const core = useAnalyticsCore(userId);
  const aiAssistance = useAIAssistance(userId);
  const quiz = usePersonalizedQuiz(userId);
  const certificates = useCertificates(userId);
  const notifications = useNotifications(userId);

  return {
    // Core analytics
    analytics: core.analytics,
    loading: core.loading,
    streakInfo: core.streakInfo,
    trackActivity: core.trackActivity,
    refreshAnalytics: core.refreshAnalytics,
    
    // AI assistance
    getAIAssistance: aiAssistance.getAIAssistance,
    
    // Personalized quiz
    generatePersonalizedQuiz: quiz.generatePersonalizedQuiz,
    
    // Certificates
    generateCertificate: certificates.generateCertificate,
    
    // Notifications
    notifications: notifications.notifications,
    refreshNotifications: notifications.refreshNotifications,
    markNotificationAsRead: notifications.markNotificationAsRead
  };
};
