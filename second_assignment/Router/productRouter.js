const { create, read, update, remove, getAll } = require('../Controller/productController');

function productWithID(req, res){
    const id = req.url.split('/')[2];
    //switch between the request methods and return the corresponding controller method.
    switch(req.method){
        case'GET':
            read(req, res, id);
            break;
        case 'POST':
            create(req, res, id);
            break;
        case 'PUT':
            update(req, res, id);
            break;
        case 'PATCH':
            update(req, res, id);
            break;
        case 'DELETE':
            remove(req, res, id);
            break;
        default:
            res.writeHead(400).end("Invalid User Request");
    
    }
}

//check for normal route without id
function productWithoutId(req, res){
    if(req.method === 'GET'){
        //get all products
        getAll(req, res);
    }
    else{
        //return invalid request
        res.writeHead(400).end('Invalid Request');
    }
}

module.exports = {
    productWithID, productWithoutId
};

