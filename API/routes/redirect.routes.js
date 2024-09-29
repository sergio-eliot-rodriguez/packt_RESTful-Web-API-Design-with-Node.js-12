import { Router } from "express";

const router = new Router();

//redirects to v1 of contacts
//permanent redirect 308 (method + body not modified)
router.all("/contacts*", (req, res) => {
    res.redirect(308,`/api/v1${req.url}`)
})

//redirects to v1 of contacts
//permanent redirect 308 (method + body not modified)
router.all("/groups*", function(req,res){
    res.redirect(308,`/api/v1${req.url}`);
});

export const redirectRouter = {
    baseUrl: "/",
    router
}
