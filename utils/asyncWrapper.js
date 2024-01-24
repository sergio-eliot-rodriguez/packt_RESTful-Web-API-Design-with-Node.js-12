//errors caught by async wrapper are sent to error handler
//(no need for try catch)
export const AsyncWrapper = funct => (req, res, next) => 
    funct(req, res).catch(next);