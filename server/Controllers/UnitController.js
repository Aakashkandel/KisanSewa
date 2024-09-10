const { stat } = require("fs");
const { Unit } = require("../Models/Unit");

const index = async (res, req) => {
    try {
        const units = await Unit.find();
        return res.status(200).json({
            message: "Units fetched successfully",
            data: units,
            status: 1
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error

        });
    }

}

const store = async (req, res) => {
    const{unit ,priority}=req.body;
    if(!unit)
    {
        return res.status(401).json({
            message:"Unit field is required",
            status:0
        })
    }

    if(!priority)
    {
        return res.status(401).json({
            message:"Priority field is required",
            status:0
        })
    }

    try{
        const UnitData=new Unit({
            name:unit,
            priority
        })
    
        await UnitData.save()
    
        return res.status(200).json({
            message:"Unit added successfully",
            data:UnitData,
            status:1
        })
    }
    catch(error)

    {
        if(error.code===11000)
        {
            return res.status(400).json({
                message:"Unit already exists",
                status:0
            })
        }
        return res.status(500).json({
            message:"Internal server error",
            error:error,
            status:0
        

        })
    }




}

const edit = async (req, res) => {
    const { id } = req.params;
    const { unit, priority } = req.body;

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
        await Unit.updateOne({ _id: id }, {
            unit, priority
        })

        return res.status(200).json({
            message: "Unit updated successfully",
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


const update = async (req, res) => {
    const { id } = req.params;
    const { name, priority } = req.body;
    try {
       const UnitData = await Unit.findOne({ _id: id });
        if (!UnitData) {
            return res.status(404).json({
                message: "Unit not found",
                status: 0
            });

        }

        UnitData.name=name;
        UnitData.priority=priority;
        await UnitData.save();

       
        return res.status(200).json({
            message: "Unit fetched successfully",
            data: unit,
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
        const unit = await Unit.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Unit deleted successfully",
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

module.exports = {
    index,
    store,
    edit,
    update,
    destroy
}
