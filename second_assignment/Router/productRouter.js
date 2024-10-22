const { getAllProducts, getProductById, updateProductById, deleteProductById, createProduct } = require('../Controller/productController');

function productWithID(req, res){
    const id = req.url.split('/')[2];
    const parsedId = parseInt(id);
    if(isNaN(parsedId)){
        res.writehead(400).end("Invalid Request");
    }
    //switch between the request methods and return the corresponding controller method.
    switch(req.method){
        case'GET':
            getProductById(req, res, parsedId);
            break;
        case 'PUT':
            updateProductById(req, res, parsedId);
            break;
        case 'PATCH':
            updateProductById(req, res, parsedId);
            break;
        case 'DELETE':
            deleteProductById(req, res, parsedId);
            break;
        default:
            res.writeHead(400).end("Invalid User Request");
    
    }
}

//check for normal route without id
function productWithoutId(req, res){
    if(req.method === 'GET'){
        //get all products
        getAllProducts(req, res);
    }
    else if(req.method === 'POST'){
        createProduct(req, res);
    }
    else{
        //return invalid request
        res.writeHead(400).end('Invalid Request');
    }
}

module.exports = {
    productWithID, productWithoutId
};

