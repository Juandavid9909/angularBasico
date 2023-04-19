/*
    ===== Código de TypeScript =====
*/
class Person {

    constructor( 
        public firstName: string,
        public lastName: string,
        public address: string = "no address"
    )  {}

}


class Hero {

    constructor( 
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }

}

const tony: Person = new Person("Tony", "Stark", "New York");
const ironman1 = new Hero('Ironman',45, 'Tony', tony);

console.log(ironman);