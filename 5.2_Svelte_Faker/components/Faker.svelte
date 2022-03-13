// sets locale to de
faker.setLocale('nb_NO');
const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties