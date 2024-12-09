//ESERCIZIO 1



class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
        }
    }
}

const user1 = new User("Mario", "Rossi", 40, "Roma");
const user2 = new User("Giovanni", "Massari", 25, "Milano");
const user3 = new User ("Francesca", "Palmeri", 30, "Roma");
const user4 = new User ("Chiara", "Nughedu", 30, "Sassari");

console.log(user1.compareAge(user2)); 
console.log(user2.compareAge(user3)); 
console.log(user1.compareAge(user3));
console.log(user3.compareAge(user4));


//ESERCIZIO 2

const petForm = document.getElementById('petForm');
const btnAdd = document.getElementById("add");
let petName = document.getElementById("petName");
let ownerName = document.getElementById("ownerName");
let species = document.getElementById("species");
let breed = document.getElementById("breed");
let petList = document.getElementById("petList");
const newListPet = [];


class Pet {
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
}



