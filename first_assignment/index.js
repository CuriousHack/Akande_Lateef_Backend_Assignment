const http = require('http');
const path = require('path');
const fs = require('fs');


const PORT = 8080;
const HOST_NAME = 'localhost';

//create the server request handler function
function requestHandler(req, res){

    //check if request url is / or index.html and the request method is GET
    if((req.url === '/' || req.url === '/index.html') && req.method === 'GET'){


        // Read the HTML file and send it as the response
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {

                res.writeHead(500);
                res.end('Error loading HTML file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });

    }
    //if the request does not match as intended, return 404 page
    else{
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
            if(err) {
                res.writeHead(500);
                res.end('Error loading content');
            }
            else{
                res.writeHead(404, {'content-type': 'text/html'});
                res.end(data);
            }
        });
        
    }

}


//create and listen to the server
const server = http.createServer(requestHandler);

server.listen(PORT, HOST_NAME, () => {
    console.log(`server is running on http://${HOST_NAME}:${PORT}`);
});