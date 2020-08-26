const Definitions = require('./Definitions')

const store = []

module.exports = {

  // return none, one or many(sub store) results
  get(executablePropertyDescriptions){ },

  // await none, one or many results
  async fetch(executablePropertyDescriptions){ },

  // await for one or many results
  async* listen(executablePropertyDescriptions){ },

  // adds one or many
  async set(executableProperties){ },

  // await for all results
  async* [Symbol.asyncIterator](){ },

  // for all results
  * [Symbol.iterator](){ }

}
