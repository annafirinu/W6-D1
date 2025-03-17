const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  compareOwnerName = function (ownerCompare) {
    if (this.ownerName === ownerCompare.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

let pets = [];

const form = document.getElementById("pet-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const pet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  console.log("Dati Animale", pet);
  pets.push(pet);
  console.log(pets);
  form.reset();
});
