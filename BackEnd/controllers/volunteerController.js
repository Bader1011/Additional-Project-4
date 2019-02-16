const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Volunteer = require("../models/Volunteer");
const auth = require("../middleware/auth");

router.get('/', Volunteer.getAll, (req, res) => {
  res.json(res.locals.users);
})

router.get('/organization', Volunteer.getAllOrganization, (req, res) => {
  res.json(res.locals.organization);
});

router.delete('/users/:id', Volunteer.delete, auth, (req, res) => {
  res.json({message: "success delete"})
})

router.post("/auth", Volunteer.findEmail, Volunteer.login, (req, res) => {
  if (!res.user) {
    res.status(400).send("invalid email or password");
  } else {
    const { email, name, phone, id , is_volunteer } = req.user;

    const token = jwt.sign({ email,name, phone, id , is_volunteer}, process.env.JWT_KEY);

    res.send({ token });
  }
});

router.post("/users", Volunteer.findEmail, Volunteer.create , (req, res) => {
  if (res.user) {
    res.status(400).send("user is already reigister");
  } else {

    console.log("\n\n\n\n\n\n\n\n_________________" , req.user)
    const { email, name, id , is_volunteer } = req.user;

    // const email = req.user.email ;
    // const name = req.user.name ;

    const token = jwt.sign({ email, name, id , is_volunteer }, process.env.JWT_KEY);

    res.send({ token });
  }
});

router.put("/users/:id",  auth,  Volunteer.update, (req, res) => {

    console.log("\n\n\n\n\n\n\n\n_________________" , res.user)

    if (res.user ){
    const {  name, id  , is_volunteer , email , phone  } = res.user;

    const token = jwt.sign({ name, id , is_volunteer }, process.env.JWT_KEY);

    res.send({ token , user: { email, name, phone, id  }});
    } else   res.send({ message:  "no user match, cannot update now " });
 
});

module.exports = router;
