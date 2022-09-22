class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.messgae = messgae;
    }
}

module.exports = ApiError;