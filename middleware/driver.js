module.exports = function (request, response, next) {
   
    //basically we define that the operation after this middleware function can only be done if the user is a branch manager
    if (request.privilege_level != 4) return response.status(401).send("Access denied");

    next();
}