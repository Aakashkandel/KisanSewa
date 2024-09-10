const { Category } = require('../Models/Category');



const index=async(res,req)=>{
    try{
        const categories=await Category.find();
        return res.status(200).json({
            message:"Categories fetched successfully",
            data:categories,
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


const show=async(req,res)=>{
    const {id}=req.params;
    try{
        const category=await Category.find({_id:id});
        return res.status(200).json({
            message:"Categories fetched successfully",
            data:category,
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
    const { name, priority } = req.body;

    console.log(name);
    console.log(priority);

    // Validate input fields
    if (!name) {
        return res.status(401).json({
            message: "Name field is required",
            status: 0,
        });
    }

    if (priority === undefined || priority === null) {
        return res.status(401).json({
            message: "Priority field is required",
            status: 0,
        });
    }

    // Check if priority is numeric
    const priorityNumber = Number(priority);
    if (isNaN(priorityNumber)) {
        return res.status(401).json({
            message: "Priority must be numeric",
            status: 0,
        });
    }

    try {
        // Create a new category instance
        const CategoryData = new Category({
            name,
            priority: priorityNumber, // Ensure priority is stored as a number
        });

        // Save the category to the database
        await CategoryData.save();

        // Respond with success message
        return res.status(200).json({
            message: "Category Added Successfully",
            data:CategoryData,
            status: 1,
        });

    } catch (error) {
        // Log the error for debugging
        console.error(error);

        // Respond with internal server error
        return res.status(500).json({
            message: "Internal server error",
            status: 0,
        });
    }
}

const update=async(req,res)=>{

    const { id } = req.params;
    const { name, priority } = req.body;


    if (!name) {
        return res.status(401).json({
            message: "Name field is required",
            status: 0,
        });
    }

    if (priority === undefined || priority === null) {
        return res.status(401).json({
            message: "Priority field is required",
            status: 0,
        });
    }

    // Check if priority is numeric
    const priorityNumber = Number(priority);
    if (isNaN(priorityNumber)) {
        return res.status(401).json({
            message: "Priority must be numeric",
            status: 0,
        });
    }

    try {
        const CategoryData = await Category.findById(id);
        if (!CategoryData) {
            return res.status(404).json({
                message: "Category not found",
                status: 0,
            });
        }

        CategoryData.name = name;
        CategoryData.priority = priorityNumber;
        await CategoryData.save();
       
        return res.status(200).json({
            message: "Category updated Successfully",
            data:CategoryData,
            status: 1,
        });

    } catch (error) { // Log the error for debugging
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            status: 0,
        });
    }
    
    
}


const edit=async(req,res)=>{
    const { id } = req.params;
    try {
        const CategoryData = await Category.findById(id);
        if (!CategoryData) {
            return res.status(404).json({
                message: "Category not found",
                status: 0,
            });
        }
        return res.status(200).json({
            message: "Category fetched Successfully",
            data:CategoryData,
            status: 1,
        });

    } catch (error) { // Log the error for debugging
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            status: 0,
        });
    }
}


const destroy=async(req,res)=>{
    const { id } = req.params;
    try {
        const CategoryData = await Category.findByIdAndDelete(id);
        if (!CategoryData) {
            return res.status(404).json({
                message: "Category not found",
                status: 0,
            });
        }
        
        return res.status(200).json({
            message: "Category deleted Successfully",
            status: 1,
        });

    } catch (error) { // Log the error for debugging
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            status: 0,
        });
    }
}

module.exports = { store, index,  update, edit, destroy };
