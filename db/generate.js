module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");

    return {
      people: _.times(10, function(n) {
        return {
          id: n + 1,
          name: faker.name.findName(),
          lastname: faker.name.findName(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          license: faker.random.number()
        };
      })
    };
  };