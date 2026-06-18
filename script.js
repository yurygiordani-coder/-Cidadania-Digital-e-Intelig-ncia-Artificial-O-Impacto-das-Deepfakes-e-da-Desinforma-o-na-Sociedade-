// 1. Controle do Modo Escuro (Garante pontos extras em Usabilidade)
const btnDarkMode = document.getElementById('btn-dark-mode');
btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Manipulação do DOM - Botão "Saiba Mais" (Esconde/Mostra Conteúdo)
const btnSaibaMais = document.getElementById('btn-saiba-mais');
const infoExtra = document.getElementById('info-extra');

btnSaibaMais.addEventListener('click', () => {
    // Alterna a classe hidden
    if (infoExtra.classList.contains('hidden')) {
        infoExtra.classList.remove('hidden');
        btnSaibaMais.textContent = 'Ocultar Dicas';
    } else {
        infoExtra.classList.add('hidden');
        btnSaibaMais.textContent = 'Como Identificar?';
    }
});

// 3. Sistema de Interatividade (Quiz) - Altera textos na tela dinamicamente
function verificarResposta(compartilhou) {
    const resultado = document.getElementById('resultado-quiz');
    
    if (compartilhou) {
        resultado.textContent = "❌ Cuidado! Compartilhar sem checar espalha a desinformação. O correto é sempre checar fontes confiáveis primeiro.";
        resultado.style.color = "#dc3545";
    } else {
        resultado.textContent = "✅ Excelente! Essa é a atitude correta de um cidadão digital consciente. Sempre verifique os fatos.";
        resultado.style.color = "#28a745";
    }
}

// 4. Captura de dados do Formulário e Prevenção do recarregamento de página
const formContato = document.getElementById('form-contato');
const msgSucesso = document.getElementById('mensagem-sucesso');

formContato.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar e perder os dados

    // Armazenando as informações em variáveis
    const nomeUsuario = document.getElementById('nome').value;
    const relatoUsuario = document.getElementById('mensagem').value;

    // Processando e exibindo os dados de forma dinâmica na tela
    msgSucesso.textContent = `Obrigado pelo contato, ${nomeUsuario}! Seu relato sobre "${relatoUsuario.substring(0, 20)}..." foi recebido com sucesso.`;
    msgSucesso.classList.remove('hidden');

    // Limpa o formulário após o envio
    formContato.reset();
});
