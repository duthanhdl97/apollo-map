const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./src/schema/TypeDefs')
const { resolvers } = require('./src/schema/Resolvers')

const PORT = { port: 3000 }

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen(PORT).then((url) => {
  console.log(`🚀  Server ready at ${url}`)
})
