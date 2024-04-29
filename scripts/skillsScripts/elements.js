
const skillLink = document.querySelector(".skillLink");
const contentHolder = document.querySelector(".contentHolder");
const skillsHolder = document.querySelector(".skillsHolder");
const homeLink = document.querySelector("[homeLinks]");


// Adicione essas classes ao clicar nos links
skillLink.addEventListener("click", event => {
    console.log("click");
    contentHolder.classList.add('fade-out'); // Adiciona a classe para esmaecer a saída
    setTimeout(() => {
        contentHolder.style.display = "none";
        contentHolder.classList.remove('fade-out'); // Remove a classe após a transição
        skillsHolder.classList.add('fade-in'); // Adiciona a classe para desvanecer a entrada
        skillsHolder.style.display = "flex";
    }, 500); // Define um intervalo de 500ms para a transição
});

homeLink.addEventListener("click", event => {
    console.log("click");
    skillsHolder.classList.add('fade-out'); // Adiciona a classe para esmaecer a saída
    setTimeout(() => {
        skillsHolder.style.display = "none";
        skillsHolder.classList.remove('fade-out'); // Remove a classe após a transição
        contentHolder.classList.add('fade-in'); // Adiciona a classe para desvanecer a entrada
        contentHolder.style.display = "flex";
    }, 500); // Define um intervalo de 500ms para a transição
});
