const { AlbumQuery, AlbumMutation } = require('./albums')
const { ClientQuery, ClientMutation } = require('./clients');
const { PhotoQuery, PhotoMutation } = require('./photos')

module.export = {
    Mutation: {...AlbumMutation, ...ClientMutation, ...PhotoMutation},
    Query: {...AlbumQuery, ...ClientQuery, ...PhotoQuery}
}