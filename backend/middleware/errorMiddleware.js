const errorHandler = (err, req, res, next) => {

    console.log(err);
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    res.status(statusCode).send("Something went wrong.");
    
    res.json({
        message: err.message,
    });
}

module.exports = {
    errorHandler
};