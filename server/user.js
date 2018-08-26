const express = require('express');
const utils = require('utility')
const Router = express.Router()
const model = require('./model');
const User = model.getModel('user')
const _filter = {'pwd': 0, '__v':0}

Router.get('/list', function(req, res){
	User.find({}, function(err, doc){
		return res.json(doc)
	})
})

Router.post('/register', function(req, res){
	console.log('body=====', req.body)
	const {user, pwd, type} = req.body
	User.find({user:user}, function(err, doc){
		console.log('doc=====', doc)
		if(doc.length > 0){
			return res.json({code:1, msg:'用户名重复'})
		}
		User.create({user, pwd:md5Pwd(pwd), type}, function(e, d){
			if(e){
				return res.json({code:1, msg:'后端出错了'})
			}else{
				res.cookie('userid', doc._id)
				return res.json({code: 0, data:doc})
			}
		})
	})
})

Router.post('/login', function(req, res){
	const {user, pwd} = req.body
	User.findOne({user, pwd: md5Pwd(pwd)}, _filter, function(err, doc){
		if(doc){
			return res.json({code:0})
		}else{
			return res.json({code:1, msg:'用户不存在'})
		}
	})
})

Router.get('/info',  function(req, res){
	const {userid} = req.cookies
	if(!userid){
		return res.json({code: 1})
	}
	User.findOne({_id: userid},_filter, function(err, doc){
		console.log('err', err)
		if(err){
			return res.json({code:1, msg:'error'})
		}else{
			return res.json({code:0, data: doc})
		}
	})
	return res.json({code: 1})
})

function md5Pwd(pwd){
	const salt = 'ixa_is_good_23423o23423~~~'
	return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router