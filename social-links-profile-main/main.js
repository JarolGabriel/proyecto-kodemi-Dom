const imagenPerfil = document.getElementById("img-perfil");
const nombreDePerfil = document.getElementById("h1texto-nombre");
const cityPerson = document.getElementById("texto-city");
const specialtyPerson = document.getElementById("texto-especialidad");

const label = document.getElementById("form-label");
const boton = document.getElementById("btn");
const input1 = document.getElementById("exampleInput1");
const input2 = document.getElementById("exampleInput2");
const input3 = document.getElementById("exampleInput3");
const input4 = document.getElementById("exampleInput4");

boton.addEventListener("click", () => {
  let imageUrl = input1.value;
  imagenPerfil.src = imageUrl;

  let perfilName = input2.value;
  nombreDePerfil.textContent = perfilName;

  let cityOfThePerson = input3.value;
  cityPerson.textContent = cityOfThePerson;

  let specialityOfTheperson = input4.value;
  specialtyPerson.textContent = specialityOfTheperson;
});
