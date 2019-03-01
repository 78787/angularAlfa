import { Person } from './person';
import { PersonRaw } from './person-raw';

export class PersonFactory {
    static empty(): Person {
        return new Person('', '', '', '', '');
    }

    static fromObject(rawPerson: PersonRaw | any): Person {
        return new Person(
            rawPerson.id,
            rawPerson.name,
            rawPerson.rolle,
            rawPerson.description,
            rawPerson.img
        );
    }
}
