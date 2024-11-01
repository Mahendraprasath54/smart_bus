const mongoose = require('mongoose');

const busTrackingSchema = new mongoose.Schema({
  busId: {
    type: String,
    required: true,
    unique: true
  },
  route: {
    startLocation: {
      type: String,
      required: true
    },
    endLocation: {
      type: String,
      required: true
    },
  },
  currentLocation: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  mileage: {
    type: Number,
    required: true
  },
  fuelConsumption: {
    type: Number,
    required: true
  },
  time: {
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    estimatedTimeToDestination: {
      type: Number
    }
  },
  distance: {
    totalDistance: {
      type: Number,
      required: true
    },
    distanceCovered: {
      type: Number,
      required: true
    },
    distanceRemaining: {
      type: Number
    }
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BusTracking', busTrackingSchema);