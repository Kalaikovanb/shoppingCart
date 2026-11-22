const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');

function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/api/products', productsRouter);
    app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
    return app;
}

if (require.main === module) {
    const app = createApp();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`shoppingCart server listening on port ${PORT}`));
}

module.exports = { createApp };
