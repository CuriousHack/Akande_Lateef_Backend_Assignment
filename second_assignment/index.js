const http = require('http');
const process = require('process');
const { productWithID, productWithoutId } = require('./Router/productRouter.js');

//accept custom PORT number and set default to 8080
const PORT = process.argv[2] ?? 8080;
const HOST_NAME = 'localhost';

//create the server request handler function
function requestHandler(req, res){

    //check if request url is / or /products and 
    if((req.url === '/' || req.url === '/products')){
        productWithoutId(req, res);
    }
    // getting parameters using match and regular expression 
    else if(req.url.match(/\/products\/([0-9]+)/)){
        productWithID(req, res);
        
    }
    //if the request does not match as intended, return 404 page
    else{
        res.writeHead(404).end('Not found');
    }

}

//create and listen to the server
const server = http.createServer(requestHandler);

server.listen(PORT, HOST_NAME, () => {
    console.log(`server is running on http://${HOST_NAME}:${PORT}`);
});






// fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
        //     if(err) {
        //         res.writeHead(500);
        //         res.end('Error loading content');
        //     }
        //     else{
        //         res.writeHead(404, {'content-type': 'text/html'});
        //         res.end(data);
        //     }
        // });





         // Read the HTML file and send it as the response
        // fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        //     if (err) {

        //         res.writeHead(500);
        //         res.end('Error loading HTML file');
        //     } else {
        //         res.writeHead(200, { 'Content-Type': 'text/html' });
        //         res.end(data);
        //     }
        // });