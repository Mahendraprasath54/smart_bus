const busCrud = require('../crud/bus_crud');

const getAllBuses = async (req, res) => {
    try {
        const result = await busCrud.getBuses();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getBusById = async (req, res) => {
    try {
        const result = await busCrud.getBusById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Bus not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

const createBus = async (req, res) => {
    try {
        const result = await busCrud.addBus(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateBus = async (req, res) => {
    try {
        const result = await busCrud.updateBus(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Bus not found' ? 404 : 400)
           .json({ success: false, message: error.message });
    }
};

const deleteBus = async (req, res) => {
    try {
        const result = await busCrud.deleteBus(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Bus not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllBuses,
    getBusById,
    createBus,
    updateBus,
    deleteBus
};