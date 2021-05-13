const { books } = require('../../FakeData')

const resolvers = {
  Query: {
    getAllBooks() {
      return books
    },
    getDetailBook(parent, args) {
      return books.find((book) => Number(book.id) === Number(args.id))
    }
  },
}

module.exports = { resolvers }
