const PhotoQuery = {
    getPhotos: async (_, {value}, {Photo}) => {
        try {
            //will validate 'data' later
            const getPhotos = await Photo.find({});
            // console.log({newPhoto})
            return getPhotos;
        }
        catch(err) {
            console.log(`SOMETHING WRONG :( ${err}`)
            throw err;
        }
    }
};

const PhotoMutation = {
    uploadPhoto: async (_, {data}, {Photo}) => {
        try {
            //will validate 'data' later
            const newPhoto = await new Photo({
                content:data
            });
            console.log({newPhoto})
            return newPhoto.save();
        }
        catch(err) {
            console.log(`SOMETHING WRONG :( ${err}`)
            throw err;
        }
    }
};

module.exports = { PhotoQuery, PhotoMutation };