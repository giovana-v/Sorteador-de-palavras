const botao = document.querySelector(".btn");
const resultado = document.querySelector("#resultado");
const palavras = ["HTML", "CSS", "JavaScript", "Dev", "Front-end", "Back-end", "Fullstack" ]

botao.addEventListener("click", function () {
    resultado.textContent = palavras[Math.floor(Math.random() * palavras.length)];
})