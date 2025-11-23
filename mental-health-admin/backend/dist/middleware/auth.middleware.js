import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).json({ error: 'No token provided' });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
//# sourceMappingURL=auth.middleware.js.map