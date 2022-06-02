const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 3000;
require("./db/conn");
const Register = require("./models/registers");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use("/public", express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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

app.listen(port, () => {
    console.log(`server is runnung at port ${port}`);
});