import { Router } from "express";

let router = Router();

router.get('/', (req, res, next) => {
  res.send("API is working properly");
});

module.exports = router;