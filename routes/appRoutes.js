'use strict';


const assetRepo = require('../repo/assetRepository');

var appRouter = function (app) {
  app
    .get("/", function(req, res) {
      res.status(200).send("Welcome to the hashing test API");
    })    
    .get('/test', (req, res) => {
      const result = 'test'
      res.send(result);
    })
    .get('/get/:hash', (req, res) => {
      const result = assetRepo.getByHash(req.params.hash);
      res.send(result);
    })
    .get('/all', (req, res) => {
      const result = assetRepo.getAll();
      res.send(result);
    })
    .get('/deleteAll', (req, res) => {
      assetRepo.remove();
      const result = 'Last asset remove. Total count: '
        + assetRepo.assets.size;
      res.send(result);
    })
    .post('/create', (req, res) => {
      const asset = req.body;
      const result = assetRepo.create(asset);
      res.end(result);
    });
}

module.exports = appRouter;
