module.exports.messages = [
  {
    id: "1",
    intentId: "1",
    text: "Je te propose les garanties suivantes : {}\n\nLaquelle veux-tu ?"
  },
  {
    id: "2",
    intentId: "1",
    text: "Voici les granties que je te propose : {}\n\nLaquelle choisi-tu ?"
  },
  {
    id: "3",
    intentId: "2",
    text: "Excellent choix ! Ca te coutera {} euros."
  },
  {
    id: "4",
    intentId: "2",
    text: "Parfait ! Cette garantie coûte {} euros seulement !"
  }
];

module.exports.attributes = [
  {
    id: "1",
    name: "garList"
  },
  {
    id: "2",
    name: "garPrice"
  }
];

module.exports.tl_message_attribute = [
  {
    mesageId: "1",
    attributeId: "1"
  },
  {
    mesageId: "2",
    attributeId: "1"
  },
  {
    mesageId: "3",
    attributeId: "2"
  },
  {
    mesageId: "4",
    attributeId: "2"
  }
];

module.exports.intents = [
  {
    id: "1",
    name: "DefaultWelcomeIntent.DefaultWelcomeIntent-yes"
  },
  {
    id: "2",
    name: "garantie-choice"
  }
];
