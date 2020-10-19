const fs = require('fs');
const path = require('path');
const Models = require('./models/index');
const Resolvers = require('./resolvers/index');

const filepath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');

