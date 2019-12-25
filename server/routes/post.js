const express = require('express');
const router = express.Router();

const path = require('path');
const conf = require(path.resolve('config'));

const axios = require('axios');

router.get('/posts', async (req, res, next) => {
    try {
        let { data } = await axios.get(`${conf.post}/posts`, req.body);
        res.send(data);
    } catch (e) {
        res.status(400).send(e.response.data);
    }
})

module.exports = router;