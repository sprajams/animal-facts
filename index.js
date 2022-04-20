console.log("hey mama");
const animalBtn = document.querySelector(".animalBtn");
animalBtn.addEventListener("click", getAnimal);

function getDrink() {
  fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let animalURL = data.image_link;
      document.querySelector(".animalImg").src = animalURL;
    });
}

function getAnimal() {
  getDrink();
}
