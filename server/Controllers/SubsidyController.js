const { Subsidy } = require("../Models/Subsidy");


const index=async(res,req)=>{
    try{
        const subsidies=await Subsidy.find();
        return res.status(200).json({
            message:"Subsidies fetched successfully",
            data:subsidies,
            status:1
        })
    }
    catch(error)
    {
        return res.status(500).json({
            message:"Internal server error",
            error:error

        });
    }
}


const store = async (req, res) => {
    const { name, description, amount, category, type, unit, priority } = req.body;
    if (!name) {
        return res.status(401).json({
            message: "Name field is required",
            status: 0
        })
    }
    if (!description) {
        return res.status(401).json({
            message: "Description field is required",
            status: 0
        })
    }
    if (!amount) {
        return res.status(401).json({
            message: "Amount field is required",
            status: 0
        })
    }
    if (!category) {
        return res.status(401).json({
            message: "Category field is required",
            status: 0
        })
    }
    if (!type) {
        return res.status(401).json({
            message: "Type field is required",
            status: 0
        })
    }
    if (!unit) {
        return res.status(401).json({
            message: "Unit field is required",
            status: 0
        })
    }
    if (!priority) {
        return res.status(401).json({
            message: "Priority field is required",
            status: 0
        })
    }

    if(req.file.mimetype !== 'image/jpeg' && req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg') {

        if(req.file.size > 1*1024*1024) {
            return res.status(400).json({
                message: "File size must be less than 1MB",
                status: 0
            })
        }
       
    }
    const image = req.file.path;

    try {
        const SubsidyData = new Subsidy({
            name, description, quantity:amount, category, type, unit, priority,image
        })

        await SubsidyData.save()
        return res.status(200).json({
            message: "Subsidy Added Successfully",
            data: SubsidyData,
            status: 1
        })


    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        })
    }
}

const edit = async (req, res) => {
    const { id } = req.params;
    try {
        const SubsidyData = await Subsidy.findById(id);
        if (!SubsidyData) {
            return res.status(404).json({
                message: "Subsidy not found",
                status: 0
            })
        }
        return res.status(200).json({
            message: "Subsidy fetched successfully",
            data: SubsidyData,
            status: 1
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: 0,
            error: error
        })
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { name, description, amount, category, type, unit, priority } = req.body;
    if (!name) {
        return res.status(401).json({
            message: "Name field is required",
            status: 0
        })
    }
    if (!description) {
        return res.status(401).json({
            message: "Description field is required",
            status: 0
        })
    }
    if (!amount) {
        return res.status(401).json({
            message: "Amount field is required",
            status: 0
        })
    }
    if (!category) {
        return res.status(401).json({
            message: "Category field is required",
            status: 0
        })
    }
    if (!type) {
        return res.status(401).json({
            message: "Type field is required",
            status: 0
        })
    }
    if (!unit) {
        return res.status(401).json({
            message: "Unit field is required",
            status: 0
        })
    }
    if (!priority) {
        return res.status(401).json({
            message: "Priority field is required",
            status: 0
        })
    }
    try {
        const SubsidyData = await Subsidy.findById(id);
        if (!SubsidyData) {
            return res.status(404).json({
                message: "Subsidy not found",
                status: 0
            })
        }
        SubsidyData.name = name;
        SubsidyData.description = description;
        SubsidyData.quantity = amount;
        SubsidyData.category = category;
        SubsidyData.type = type;
        SubsidyData.unit = unit;
        SubsidyData.priority = priority;
        await SubsidyData.save();
        return res.status(200).json({
            message: "Subsidy updated successfully",
            data: SubsidyData,
            status: 1
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        })
    }
}


const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        await Subsidy.findByIdAndDelete({ _id: id });
        return res.status(200).json({
            message: "Subsidy deleted successfully",
            status: 1
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        })
    }
}

module.exports = { index, edit, update,store, destroy }

