const express = require("express");

const moyoModel = require("./moyo.model");

const setupServer = () => {
    const app = express();
    app.use(express.json());

    app.get("/api/nekomoyo", async (req, res) => {
        const moyos = await moyoModel.getAll();
        res.json(moyos);
    });

    app.get("/api/nekomoyo/:id", async (req, res) => {
        const id = req.params.id;
        const moyo = await moyoModel.getById(id);
        res.json(moyo);
    });

    app.post("/api/nekomoyo", async (req, res) => {
        const moyo = req.body;
        await moyoModel.create(moyo);
        res.json(moyo);
    });

    app.patch("/api/nekomoyo/:id", async (req, res) => {
        const id = req.params.id;
        const moyo = req.body;
        await moyoModel.update(id, moyo);
        res.json(moyo);
    });

    app.delete("/api/nekomoyo/:id", async (req, res) => {
        const id = req.params.id;
        await moyoModel.delete(id);
        res.json(id);
    });

    return app;
};

module.exports = { setupServer };
