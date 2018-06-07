import express from 'express';
const router = express.Router();

router.use('/products', require('./product').default);
router.use('/todos', require('./todo').default);
router.use('/users', require('./user').default);

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to the express api!' });
});

export default router;