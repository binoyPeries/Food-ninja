module.exports = function (request, response, next) {
    
    if (request.privilege_level != 1) return response.status(401).send("Access denied");

    next();
}