export const rbacMiddleware = (requiredRoles) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !requiredRoles.includes(user.role)) {
            res.status(403).json({ error: 'Insufficient permissions' });
            return;
        }
        next();
    };
};
//# sourceMappingURL=rbac.middleware.js.map