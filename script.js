window.onload = function () {
    const botao = document.getElementById("botao");

    botao.style.backgroundColor = "blue";
    botao.style.transition = "background-color 0.5s ease";

    botao.addEventListener("mouseenter", () => {
        botao.style.backgroundColor = "green";
    });

    botao.addEventListener("mouseleave", () => {
        botao.style.backgroundColor = "blue";
    });

    botao.addEventListener("mousedown", () => {
        botao.style.backgroundColor = "yellow";
    });

    botao.addEventListener("mouseup", () => {
        botao.style.backgroundColor = "orange";
    });
};