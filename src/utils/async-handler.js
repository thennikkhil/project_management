const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise
        .resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}

export { asyncHandler }


// actually try catch blocks have their own preformance issues
// so we use this utility to reduce the work for try catch for every test