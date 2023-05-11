

function activarImgA(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.remove("active");
    imgA.classList.add("active");

    btnB.classList.remove("active");
    btnA.classList.add("active");

}

function activarImgB(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.add("active");
    imgA.classList.remove("active");

    btnB.classList.add("active");
    btnA.classList.remove("active");

}

function filtarCats(){
    const dogs = document.querySelectorAll(".dog");
    const cats = document.querySelectorAll(".cat");
    const btnDog = document.getElementById("btn-dog");
    const btnCat = document.getElementById("btn-cat");

    dogs.forEach(dog => dog.classList.remove("active"));
    cats.forEach(cat => cat.classList.add("active"));

    btnDog.classList.remove("active");
    btnCat.classList.add("active");
}

function filtarDogs(){
    const dogs = document.querySelectorAll(".dog");
    const cats = document.querySelectorAll(".cat");
    const btnDog = document.getElementById("btn-dog");
    const btnCat = document.getElementById("btn-cat");

    dogs.forEach(dog => dog.classList.add("active"));
    cats.forEach(cat => cat.classList.remove("active"));

    btnDog.classList.add("active");
    btnCat.classList.remove("active");
}