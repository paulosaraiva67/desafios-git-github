// Parte 1 do código
const numero = document.querySelector(".numero-principal");
const botaoMenos = document.querySelector(".botao.decremento");
const botaoMais = document.querySelector(".botao.incremento");
const botaoReset = document.querySelector(".botao.reset");

// Parte 2 do código
botaoMais.addEventListener("click", function () {
	numero.innerHTML = +numero.innerHTML + 1;
});
botaoMenos.addEventListener("click", function () {
	numero.innerHTML = +numero.innerHTML - 1;
});
botaoReset.addEventListener("click", function () {
	numero.innerHTML = 0;
});
