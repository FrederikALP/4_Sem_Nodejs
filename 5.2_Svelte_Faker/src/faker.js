import { faker } from '@faker-js/faker';
faker.setLocale("nb_NO");

let fakerList = []

function newFakerPerson(){
    const gender = faker.name.gender(true);
    const fakePerson = {
        firstName: faker.name.firstName(gender),
        lastName: faker.name.lastName(),
        gender: gender,
        avatar: faker.image.avatar(),
        job: faker.name.jobArea()
    }
    fakerList.push(fakePerson);
}

for (let index = 0; index < 25; index++) {
    newFakerPerson();
}

export default{fakerList}