const http = require('http');
const port = 8000;
const fs = require('fs');

//creat a requestHandler function and pass two argument 
// request and responce 

function requestHandler(req, res) {
      console.log(req.url);
      res.writeHead(200, { 'Content-Type': 'text/html' });

      let filPath;
      switch (req.url) {
            case '/':
                  filPath = './index.html'
                  break;
            case '/profile':
                  filPath = './profile.html'
                  break;
            default:
                  filPath = './404.html'
      }
      fs.readFile(filPath, function (err, data) {
            if (err) {
                  console.log('error', err);
                  return res.end('<h1> Error </h1>')
            }
            return res.end(data);
      });
}
// and then pass this function to the server
const server = http.createServer(requestHandler);

server.listen(port, function (err) {
      if (err) {
            console.log(err);
            return;
      }
      console.log("server is running on port:", port);
});
