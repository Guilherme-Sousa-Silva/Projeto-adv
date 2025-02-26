document.addEventListener("DOMContentLoaded", function () {
    // Inicializa o EmailJS
    emailjs.init("aP9tI6INHYihqXbaO"); // Substitua pelo seu User ID do EmailJS

    // Adiciona evento ao formulário
    document.getElementById("enviarEmail").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        alert("Enviando e-mail..."); // Para debug

        let params = {
            nome: document.getElementById("nomeCompleto").value,
            email: document.getElementById("email").value,
            celular: document.getElementById("telefoneCelular").value,
            mensagem: document.getElementById("mensagem").value,
            comoNosConheceu: document.getElementById("comoNosConheceu").value,
        }

        emailjs.send("service_xtmy27t", "template_lf7y1xf", params).then(
            function (response) {
                alert("E-mail enviado com sucesso!");
            },
            function (error) {
                alert("Erro ao enviar e-mail: " + JSON.stringify(error));
            }
        );
    });
});
