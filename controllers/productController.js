const productService = require("../services/productService");


/* ------------------  Handle Get All Products ------------------ */

const handleGetAllProducts = async(req, res) => {

    const { name, category }= req.query;

    const { status, status_code, message, data } = await productService.handleGetAllProducts({
        name,
        category
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });

};

/* ------------------  End Handle Get All Products ------------------ */


/* ------------------  Handle Create Product ------------------ */

const handleCreateProduct = async(req, res) => {

    const { name, price, category, description }= req.body;

    const adminId = req.admin._id;

    const { status, status_code, message, data } = await productService.handleCreateProduct({
        adminId,
        name, 
        price, 
        category,
        description,
        picture: req.file
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });

};

/* ------------------ End Handle Create Product ------------------ */

module.exports = { 
    handleGetAllProducts,
    handleCreateProduct
};