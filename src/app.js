const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 3000;
require("./db/conn");
const Register = require("./models/registers");
const async = require("hbs/lib/async");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use("/public", express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.json()); //built in middle ware in express
app.use(express.urlencoded({ extended: false }));//built in middle ware in express with parameter extended


app.get('/', (req, res) => {
    res.render("index");
});

app.get('/register', (req, res) => {
    res.render("register");
})
app.get('/premiumHome', (req, res) => {
    res.render("premiumHome");
})
app.get('/premiumFeedback', (req, res) => {
    res.render("premiumFeedback");
})
app.get('/premiumSurveillance', (req, res) => {
    res.render("premiumSurveillance");
})

app.post('/register', async (req, res) => {
    try {
        console.log(req.body)
        const password = req.body.userPassword;
        // const cpassword = req.body.confirmpassword;

        if (password === req.body.userPassword) {
            const registerUser = new Register({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.userEmail,
                password: password,
                // confirmpassword: confirmpassword
            })
            const registered = await registerUser.save();
            return res.status(201).render("premiumHome");
            // return res.end();
        }
        else {
            console.log("password not matching")
            return res.send("Password not Matching");
            // return res.end();

        }


    } catch (error) {
        console.log("error :", error)
        res.status(400).send(error);
        // return res.end();

    }
})

app.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Register.findOne({ email: email });

        if (userEmail.password === password) {
            res.status(201).render("premiumHome");
        }
        else {
            res.send("Email/Password in Incorrect");
        }

    } catch (error) {
        res.status(400).send("Invalid Email");

    }
})
app.listen(port, () => {
    console.log(`server is runnung at port ${port}`);
});