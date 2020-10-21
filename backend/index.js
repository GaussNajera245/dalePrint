const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Models = require('./models/index');
const resolvers = require('./resolvers/index');
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const { ApolloServer, AuthenticationError } = require('apollo-server');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      console.log({req})
      return {...Models};
    }
});
  
  const U = process.env.MONGO_USER;
  const P = process.env.MONGO_PASSWORD;
  const D = process.env.MONGO_DB;
  const URI = `mongodb+srv://${U}:${P}@nodeapi.s48ar.mongodb.net/${D}?retryWrites=true&w=majority`

  const config = {
    useNewUrlParser: true, 
    'useCreateIndex': true, 
    useUnifiedTopology: true 
  }

  mongoose.connect( URI, {...config} )
  .then(() => {
    server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(err => {
    console.log(err);
  })