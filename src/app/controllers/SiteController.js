class SiteController{

    // [GET] /
    home(req, res) {
        res.render('home')
    }

    // [Get] /search
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteController;