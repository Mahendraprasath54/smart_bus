const addBusTracking = async (Model, data) => {
    try {
        const record = await Model.create(data);
        return { success: true, data: record };
    } catch (error) {
        console.error('Add bus tracking error:', error);
        throw new Error(error.message);
    }
};

const getAllBusTrackings = async (Model) => {
    try {
        const records = await Model.find().sort({ updatedAt: -1 });
        return { success: true, data: records };
    } catch (error) {
        console.error('Get all bus trackings error:', error);
        throw new Error(error.message);
    }
};

const getBusTrackingById = async (Model, id) => {
    try {
        const record = await Model.findById(id);
        if (!record) {
            throw new Error('Bus not found');
        }
        return { success: true, data: record };
    } catch (error) {
        console.error('Get bus tracking by ID error:', error);
        throw new Error(error.message);
    }
};

const updateBusTracking = async (Model, id, data) => {
    try {
        const record = await Model.findByIdAndUpdate(
            id,
            data,
            { new: true, runValidators: true }
        );
        if (!record) {
            throw new Error('Bus not found');
        }
        return { success: true, data: record };
    } catch (error) {
        console.error('Update bus tracking error:', error);
        throw new Error(error.message);
    }
};

const deleteBusTracking = async (Model, id) => {
    try {
        const record = await Model.findByIdAndDelete(id);
        if (!record) {
            throw new Error('Bus not found');
        }
        return { success: true, message: 'Bus tracking deleted successfully' };
    } catch (error) {
        console.error('Delete bus tracking error:', error);
        throw new Error(error.message);
    }
};

module.exports = {
    addBusTracking,
    getAllBusTrackings,
    getBusTrackingById,
    updateBusTracking,
    deleteBusTracking
};