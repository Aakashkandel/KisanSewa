const { Type } = require("../Models/Types");

const index = async (res, req) => {
    try {
        const types = await Type.find();
        return res.status(200).json({
            message: "Types fetched successfully",
            data: types,
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
    const { category_id, name, priority } = req.body;
    if (!category_id) {
        return res.status(401).json({
            message: "Category field is required",
            status: 0
        })
    }


    if (!name) {
        return res.status(401).json({
            message: "Name field is required",
            status: 0
        })
    }




    if (!priority) {
        return res.status(401).json({
            message: "priority field is required",
            status: 0
        })
    }



    try {
        const TypeData = new Type({
            category: category_id,
            name, priority

        })

        await TypeData.save()
        return res.status(200).json({
            messagee: "Type Added Successfully",
            data: TypeData,
            status: 1
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }


}


const edit=async(req,res)=>{
    const {id}=req.params;
    try{
        const type=await Type.findOne({_id:id});
        return res.status(200).json({
            message:"Type fetched successfully",
            data:type,
            status:1
        })
    }
    catch(error)
    {
        return res.status(500).json({
            message:"Internal server error",
            error:error
        })
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { name, priority } = req.body;
    try {
        const type = await Type.findOne({ _id: id });
        if (!type) {
            return res.status(404).json({
                message: "Type not found",
                status: 0
            })
        }

        type.name = name;
        type.priority = priority;
        await type.save();
        return res.status(200).json({
            message: "Type updated successfully",
            data: type,
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
        const type = await Type.findByIdAndDelete(id);
        if (!type) {
            return res.status(404).json({
                message: "Type not found",
                status: 0
            })
        }
     
        return res.status(200).json({
            message: "Type deleted successfully",
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

module.exports = { store, index, update, edit, destroy };