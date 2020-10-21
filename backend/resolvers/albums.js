const AlbumQuery = {
    getAllAlbums: async(_, {nothing}, {Album}) => {
        try{
            const pooh = await Album.find({});
            return pooh
        }
        catch(err) {
            console.log(`SOMETHING WRONG :( ${err}`)
            throw err;
        }
    }
};

const AlbumMutation = {
    createAlbum: async (_, {client_Id, client_mail, name, photos, status}, {Album}) => {
        try {
            //You can make an object argument in which the key it's the index for the photos;
            const newAlbum = await new Album({
                client_Id, 
                client_mail, 
                name, 
                photos, 
                status
            });
            console.log({newAlbum})
            return newAlbum.save();
        }
        catch(err) {
            console.log(`SOMETHING WRONG :( ${err}`)
            throw err;
        }
    },
    signUpAlbum2Client: async (_, {albumId, photoOrder, clientMail}, {Client}) => {
        try{
            //photoOrder is there to reinforce the Order of the photos
            const findClient = await Client.findOne({ mail: clientMail })
            if(findClient){
                findClient.album_orders = [...findClient.album_orders, albumId]
                return true
            }else{
                return false
            }
        }
        catch(err) {
            console.log(`SOMETHING WRONG :( ${err}`)
            throw err;            
        }        
    }
};

module.exports = {AlbumQuery, AlbumMutation};