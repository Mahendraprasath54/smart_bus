const BusTracking = require('../model');
const dbFactory = require('../utils/dbfactory');

const addBus = (data) => dbFactory.addBusTracking(BusTracking, data);
const getBuses = () => dbFactory.getAllBusTrackings(BusTracking);
const getBusById = (id) => dbFactory.getBusTrackingById(BusTracking, id);
const updateBus = (id, data) => dbFactory.updateBusTracking(BusTracking, id, data);
const deleteBus = (id) => dbFactory.deleteBusTracking(BusTracking, id);

module.exports = { addBus, getBusById, getBuses, updateBus, deleteBus };
