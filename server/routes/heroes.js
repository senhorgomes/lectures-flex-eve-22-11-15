const express = require("express");
const mockData = require("../data/superHeroData");

const router = express.Router();

router.get("/", (req, res)=> {
    res.json(mockData)
})
router.post("/", (req, res)=> {
    //we are now retrieving the object from the frontend
    // and adding it to our mockData
    // Then we will send a res.status 200 for reassurance
    const newHeroObject = {
        id: mockData.length,
        name: req.body.newHero
    }
    mockData.push(newHeroObject);
    res.status(200)
})

module.exports = router;