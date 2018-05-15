const Garantie = require("../model/Garantie/index");
const db_business = require("../db-business/index");

module.exports = class Service {
  constructor() {}

  getGarantieList() {
    return db_business.allGaranties.map(
      ({ id, name, price }) => new Garantie(id, name, price)
    );
  }

  getGarantiePrice(garantieId) {
    const result = null;
    db_business.allGaranties.forEach(({ id, name, price }) => {
      if (id === garantieId) result = new Garantie(id, name, price);
    });
    return result;
  }
};
