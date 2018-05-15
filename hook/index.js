const actionMap = require("./actionMapping");

module.exports = class Hook {
  constructor(requestBody) {
    this.actionHandler;

    const { intent } = requestBody;
    actionMap.forEach(({ name, handler }) => {
      if (name === intent.action) {
        ActionHandler = require(`./handlers/${handler}/index`);
        this.actionHandle = new ActionHandler(requestBody);
      }
    });
  }

  handleRequest() {
    return this.actionHandler.handle();
  }
};
