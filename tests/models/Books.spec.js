const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers')

const Book = require('../../models/book')

describe('Book', () => {
  const DescribedModel = Book(sequelize, dataTypes)
  const subject = new DescribedModel()

  checkModelName(DescribedModel)('Book')
  checkPropertyExists(subject)('title')
})
