const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

let petList = document.getElementById("petList");
let addButton = document.getElementById("add");

let pets = [];

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

const renderList = function () {
  petList.innerHTML = ""; // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText =
      "Nome: " + pet.petName + ", proprietario: " + pet.ownerName;
    petList.appendChild(newLi);
  });
};

const form = document.getElementById("pet-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  console.log("Dati Animale", newPet);
  pets.push(newPet);
  console.log(pets);
  renderList();
  petNameInput.value = ""; // <-- svuota l'input field alla fine
  ownerNameInput.value = ""; // <-- svuota l'input field alla fine
  speciesInput.value = ""; // <-- svuota l'input field alla fine
  breedInput.value = ""; // <-- svuota l'input field alla fine
  form.reset();
});

console.log(petList.compareOwnerName(petList));
