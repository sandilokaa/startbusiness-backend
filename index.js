const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongooseConnect = require("./config/config.db");
const fileUpload = require("./utils/fileUpload");
// const path = require("path");
const PORT = 2000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// ================================= Public File Access ================================= //

// app.use("/public/files", express.static(path.join(__dirname, "/storages")));

// ================================= End Public File Access ================================= //


/* ================================= Import Middlewares ================================= */

const middlewares = require("./middlewares/auth");

/* ================================= End Import Middlewares ================================= */


/* ================================= Import Controllers ================================= */

const authController = require("./controllers/authController");
const productController = require("./controllers/productController");

/* ================================= End Import Controllers ================================= */


/* ================================= Define API ================================= */

/* ------------------------- Admin ------------------------- */

app.post('/api/v1/admin/register', authController.handleRegisterAdmin);
app.post('/api/v1/admin/login', authController.handleLoginAdmin);

/* ------------------------- End Admin ------------------------- */


/* ------------------------- Products ------------------------- */

app.get('/api/v1/products', productController.handleGetAllProducts);
app.post('/api/v1/products', middlewares.authenticate, fileUpload.single("image"), productController.handleCreateProduct);

/* ------------------------- End Products ------------------------- */

/* ================================= End Define API ================================= */


app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});