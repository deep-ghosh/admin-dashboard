export const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        req.body = value;
        next();
    };
};
//# sourceMappingURL=validation.middleware.js.map