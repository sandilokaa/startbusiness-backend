const productRepository = require("../repositories/productRepository");
const cloudinary = require("../cloudinaries/cloudinary");

class productService {
    

    /* ------------------  Handle Get All Products ------------------ */

    static async handleGetAllProducts({ name, category }) {

        try {

            const getAllProducts = await productRepository.handleGetAllProducts({ name, category });

            return {
                status: true,
                status_code: 200,
                message: "Data successfully grabbed!",
                data: {
                    handleGetAllProducts: getAllProducts,
                },
            };
            
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetAllProducts: null,
                },
            };
        }

    };

    /* ------------------  End Handle Get All Products ------------------ */


    /* ------------------  Handle Get Product By Id ------------------ */
    
    static async handleGetProductById({ id }) {

        try {

            const getProductById = await productRepository.handleGetProductById({ id });

            return {
                status: true,
                status_code: 200,
                message: "Data successfully grabbed!",
                data: {
                    handleGetProductById: getProductById,
                },
            };
            
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetProductById: null,
                },
            };
        }

    };
    
    /* ------------------  End Handle Get Product By Id ------------------ */


    /* ------------------ Handle Create Product ------------------ */

    static async handleCreateProduct({ adminId, name, price, category, description, attention, picture }) {

        try {

            /* ------------------ Payload Validation ------------------ */

            if (!name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name must be filled!",
                    data: {
                        handleCreateProduct: null
                    }
                }
            }

            if (!price) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Content must be filled!",
                    data: {
                        handleCreateProduct: null
                    }
                }
            }

            if (!category) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Category must be filled!",
                    data: {
                        handleCreateProduct: null
                    }
                }
            }

            if (!description) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Description must be filled!",
                    data: {
                        handleCreateProduct: null
                    }
                }
            }
            
            if (!attention) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Attention must be filled!",
                    data: {
                        handleCreateProduct: null
                    }
                }
            }

            /* ------------------ End Payload Validation ------------------ */

            let pictures = "";

            if (picture) {
                const fileBase64 = picture.buffer.toString("base64");
                const file = `data:${picture.mimetype};base64,${fileBase64}`;
                const cloudinaryPicture = await cloudinary.uploader.upload(file);
                pictures = cloudinaryPicture.url;
            }

            const createdProduct = await productRepository.handleCreateProduct({
                adminId,
                name,
                price,
                category,
                description,
                attention,
                picture: pictures
            });

            return {
                status: true,
                status_code: 201,
                message: "User successfully added data!",
                data: {
                    handleCreateProduct: createdProduct
                }
            }

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreateProduct: null,
                },
            };
        }

    };

    /* ------------------ End Handle Create Product ------------------ */

};

module.exports = productService;