import { AnalyticsService } from '../services/analytics.service';
const analyticsService = new AnalyticsService();
export const analyticsController = {
    getOverviewMetrics: async (_req, res) => {
        try {
            const metrics = await analyticsService.getOverviewMetrics();
            res.json(metrics);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getWeeklyTrend: async (req, res) => {
        try {
            const days = req.query.days ? parseInt(req.query.days) : 7;
            const trend = await analyticsService.getWeeklyTrend(days);
            res.json({ trend });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getDepartmentStats: async (_req, res) => {
        try {
            const stats = await analyticsService.getDepartmentStats();
            res.json({ departments: stats });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getMonthlyComparison: async (req, res) => {
        try {
            const months = req.query.months ? parseInt(req.query.months) : 6;
            const comparison = await analyticsService.getMonthlyComparison(months);
            res.json({ monthly: comparison });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
//# sourceMappingURL=analytics.controller.js.map