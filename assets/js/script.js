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
const user3 = new User("Francesca", "Palmeri", 30, "Roma");
const user4 = new User("Chiara", "Nughedu", 30, "Sassari");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user3));
console.log(user1.compareAge(user3));
console.log(user3.compareAge(user4));

//ESERCIZIO 2

let petName = document.getElementById("petName");
let ownerName = document.getElementById("ownerName");
let species = document.getElementById("species");
let breed = document.getElementById("breed");
let petList = document.getElementById("petList");
let button = document.getElementById("add");
let pets = [];

class Pets {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const createList = function () {
  petList.innerText = " ";
  pets.forEach((pet) => {
    const newli = document.createElement("li");
    newli.innerText =
      "Nome: " + pet.petName + ", Proprietario: " + pet.ownerName;
    petList.appendChild(newli);
  });
};

button.onclick = function () {
  let newPet = new Pets(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  pets.forEach((pet) => {
    let isSameOwner = newPet.sameOwner(pet);
    console.log(`Il nuovo animale "${newPet.petName}" ha lo stesso padrone di "${pet.petName}": ${isSameOwner}`);
  });
  pets.push(newPet);
  const jsonObj = JSON.stringify(pets);//creo la variabile per trasformare l'array in dati stringa
  localStorage.setItem("pets", jsonObj);//setItem salva nella memoria gli elementi stringa inseriti (jsonObj) e setto il primo valore per poterlo recuperare con getItem. 
  createList();
  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
};

