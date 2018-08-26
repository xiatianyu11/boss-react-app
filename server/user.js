const express = require('express');
const Router = express.Router()
const mongoose = require('mongoose');

Router.get('/info', function(req, res){
	return res.json({code: 1})
})

module.exports = Router