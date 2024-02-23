class NewsController{

    // [GET] /new
    index(req, res) {
        res.render('news')
    }

}

module.exports = new NewsController;