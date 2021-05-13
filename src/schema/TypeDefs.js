const { gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
  }

  type Query {
    getAllBooks: [Book!]!
    getDetailBook(id: ID!): Book
  }

  #type Mutation {}
`

module.exports = { typeDefs }
