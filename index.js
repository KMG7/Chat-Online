function adicionarMensagem(nome, texto, classe) {

    let divNome = document.createElement("div");
    let divTexto = document.createElement("div");

    divNome.className = "msg-" + classe;
    divTexto.className = "msg mensagem-" + classe;

    divNome.innerHTML = "<strong>" + nome + " diz:</strong>";
    divTexto.textContent = texto;

    let chatMensagem = document.querySelector(".chat-mensagem");

    chatMensagem.appendChild(divNome);
    chatMensagem.appendChild(divTexto);
}

function enviarMensagem() {

    let inputMensagem = document.getElementById("inputMensagem");
    let mensagem = inputMensagem.value;

    if (mensagem.trim() !== "") {

        adicionarMensagem("Você", mensagem, "aluno");
        inputMensagem.value = "";
    }
    else {
        alert('Digite uma mensagem!');
    }
}