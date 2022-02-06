
var http = require('http')
const server = http.createServer();
var io = require('socket.io')(server, {
  cors:{
    origin:'https://crabragoonfront.joethegetitguy.repl.co',
  }
});
server.listen(3000)

io.on('connection', (socket) => {
  console.log('a new user');
     console.log('wow')
  
  socket.on('ouch', () => {
    console.log('ouch')
})

  socket.on("disconnect", () => {
  console.log('lost user');
     console.log('wow')
    });
});
