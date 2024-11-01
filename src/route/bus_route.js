const busRouter = require('express').Router()
const busControl = require('../controller/bus_controller');

busRouter.post('/', busControl.createBus)

busRouter.get('/', busControl.getAllBuses)

busRouter.get('/:id', busControl.getBusById)

busRouter.put('/:id', busControl.updateBus)

busRouter.delete('/:id', busControl.deleteBus)

module.exports = busRouter;