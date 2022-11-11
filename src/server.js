const express = require("express");

const moyoModel = require("./moyo.model");

const setupServer = () => {
    const app = express();
    app.use(express.json());

    app.get("/api/nekomoyo", async (req, res) => {
        const moyos = await moyoModel.getAll();
        res.json(moyos);
    });

    return app;
};

module.exports = { setupServer };
