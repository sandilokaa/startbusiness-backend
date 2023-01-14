const products = require("../models/products.model");

class productRepository {

    
    /* ------------------  Handle Get All Products ------------------ */

    static async handleGetAllProducts({ name, category }){

        if (name) {
            
            const getProductsByName = await products.find({
                name: new RegExp(".*" + name + ".*"),
            });
            
            return getProductsByName;
        }

        if (category) {
            
            const getProductsByCategory = await products.find({
                category: new RegExp(".*" + category + ".*"),
            });
            
            return getProductsByCategory;
        }

        const getAllProducts = await products.find({});
        
        return getAllProducts;

    };

    /* ------------------  Handle Get All Products ------------------ */


    /* ------------------  Handle Get Product By Id ------------------ */

    static async handleGetProductById({ id }){

        const getProductById = await products.findById(id);

        return getProductById;

    };

    /* ------------------  End Handle Get Product By Id ------------------ */


    /* ------------------ Handle Create Product ------------------ */

    static async handleCreateProduct({ adminId, name, price, category, description, picture }) {
    
        const productsInput = new products({
            adminId, 
            name, 
            price, 
            category, 
            description, 
            picture
        });

        const createdProduct = await productsInput.save();

        return createdProduct;
    
    };

    /* ------------------ End Handle Create Product ------------------ */

};

module.exports = productRepository;