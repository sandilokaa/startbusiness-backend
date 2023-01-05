const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongooseConnect = require("./config/config.db");

const PORT = 2000;
const app = express();
app.use(express.json());


/* ================================= Import Controllers ================================= */

const authController = require("./controllers/authController");

/* ================================= End Import Controllers ================================= */


/* ================================= Define API ================================= */

/* ------------------------- Admin ------------------------- */

app.post('/api/v1/admin/register', authController.handleRegisterAdmin);
app.post('/api/v1/admin/login', authController.handleLoginAdmin);

/* ------------------------- End Admin ------------------------- */

/* ================================= End Define API ================================= */


app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});