const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/user', (req, res, next) => {
    db.query(
      'INSERT INTO user (owner, name, description, date) VALUES (?,?,?,?)',
      [owner, req.body.name, req.body.description, new Date(req.body.date)],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/user', function (req, res, next) {
    db.query(
      'SELECT * FROM user',
      [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/user/:id', function (req, res, next) {
    db.query( 
      // 'SELECT `user`.*, `list`.*, `list_item`.* FROM `user` LEFT JOIN `list` ON `list`.`list_id` = `user`.`id` LEFT JOIN `list_item` ON `list_item`.`list_item_id` = `list`.`id` WHERE `user`.`id`=?',
      'SELECT * FROM user WHERE id=?',
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/list/:id', function (req, res, next) {
    db.query( 
      'SELECT * FROM list WHERE list_id=?',
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/list_item/:id', function (req, res, next) {
    db.query( 
      'SELECT * FROM list_item WHERE list_item_id=?',
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.put('/user/:id', function (req, res, next) {
    db.query(
      'UPDATE user SET firstName=?, lastName=?, age=?, description=?, hometown=?, country=? WHERE id=?',
      [req.body.firstName, req.body.lastName, req.body.age, req.body.description, req.body.hometown, req.body.country, req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.put('/list_item/:id', function (req, res, next) {
    db.query(
      'UPDATE list_item SET establishment=?, beerName=?, type=?, address=? WHERE id=?',
      [req.body.establishment, req.body.beerName, req.body.type, req.body.address, req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/user/:id', function (req, res, next) {
    db.query(
      'DELETE FROM user WHERE id=? AND owner=?',
      [req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  return router;
}

module.exports = createRouter;