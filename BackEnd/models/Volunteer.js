
var db = require("../db/config");
var bcrypt = require("bcrypt");
var user = {};

user.login = (req, res, next) => {
  db.one("SELECT * FROM users WHERE email = $1;", [req.body.email])
    .then(function (result) {
      if (bcrypt.compareSync(req.body.password, result.password)) {
        req.user = result;
      }
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    });
};



user.getAll = (req, res, next) => {
  db.manyOrNone("SELECT * FROM users;")
    .then((data) => {
      res.locals.users = data
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

user.getAllOrganization = (req, res, next) => {
    db.manyOrNone("SELECT * FROM organization;")
      .then((data) => {
        res.locals.organization = data
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
  }

user.findEmail = (req, res, next) => {
  db.oneOrNone("SELECT * FROM users WHERE email=$1;", [req.body.email])
    .then(function (result) {
      res.user = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    });
};

user.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  db.one(
    "INSERT INTO users (name ,email, password, phone, is_volunteer) VALUES($1, $2, $3, $4, $5 ) RETURNING *;",
    [
      req.body.name ? req.body.name.toLowerCase() : "",
      req.body.email ? req.body.email.toLowerCase() : "",
      bcrypt.hashSync(req.body.password, salt),
      req.body.phone,
      req.body.is_volunteer,
    ]
  )
    .then(function (result) {
        console.log('work',result)
      req.user = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    });
};


user.update = (req, res, next) => {

  console.log("\n\n\n\n\n\n" , req.body)
  const salt = bcrypt.genSaltSync(10);
  db.one('UPDATE users SET name=$1, email=$2, password=$3, phone=$4, is_volunteer=$5 where id=$6 RETURNING *;',
    [
      req.body.name.toLowerCase(),
      req.body.email.toLowerCase(),
      bcrypt.hashSync(req.body.password, salt),
      req.body.phone,
      req.body.is_volunteer,
      req.params.id])
    .then((data) => {
      console.log(data)
      res.user = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
};


user.delete = (req, res, next) => {
  db.none('DELETE FROM users WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = user;
