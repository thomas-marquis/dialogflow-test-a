const Service = require("../../../service/index");

module.exports = class WelcomeYes {
  constructor(requestBody) {
    this.requestBody = requestBody;
    this.service = new Service();
  }

  handle() {
    return new Promise((resolve, reject) => {
      // Call business methods
      const garList = this.service.getGarantieList();
      // Call message builder
    });
  }
};
