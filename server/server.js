const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const model = require('./model');
const path = require('path')


const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

const Chat = model.getModel('chat')
io.on('connection', function (socket) {
  socket.on('sendmsg', function (data) {
    console.log(data)
    const {from, to, msg} = data
    const chatid = [from, to].sort().join('_')
    Chat.create({chatid, from, to, content: msg}, function (err, doc) {
      io.emit('recvmsg', Object.assign({}, doc._doc))
    })
  })
})


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.use(function (req, res, next) {
  if (req.url.startsWith('/user/') || req.url.startsWith('/static/')) {
    return next()
  }
  return res.sendFile(path.resolve('build/index.html'))
})
app.use('/', express.static(path.resolve('build')))


app.listen(9093, function(){
	console.log('Node app start at port 9093');
});