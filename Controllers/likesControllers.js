const Likes = require ('../Models/Likes')

const getUserLikes = (req, res) => {
    const idUsername = req.params.idUsername
    console.log(idUsername)
    Likes
        .find({idUsername})
        .then(resp => res.json({response: resp}))
}

const postUserLikes = (req, res) => {
    console.log(req.body)
    const { idUsername, idPhoto, url } = req.body
    Likes
        .create({idUsername, idPhoto, url})
        .then(resp => res.json({response: 'Created'}))
}

const removeLikes = (req, res) => {
    const idPhoto = req.params.idPhoto
    Likes 
        .deleteOne ({idPhoto})
        .then(resp=> res.json({response: resp}))
}

module.exports = {
    getUserLikes,
    postUserLikes,
    removeLikes
}




