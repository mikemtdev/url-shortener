const path = require('path');

export.home (req, res, next) => {
    res.sendFile(path.join(path.resolve() + '/views/home.html'))
}