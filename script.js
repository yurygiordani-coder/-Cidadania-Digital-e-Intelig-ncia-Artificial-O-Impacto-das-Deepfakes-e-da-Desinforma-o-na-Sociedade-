// Otimização e Segurança: escuta o carregamento inicial da página
document.addEventListener("DOMContentLoaded", () => {

    // 1. Alternador de Modo Escuro
    const btnDarkMode = document.getElementById('btn-dark-mode');
    btnDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Altera o texto do botão baseado na classe ativa
        if (document.body.classList.contains('dark-mode')) {
            btnDarkMode.textContent = 'Alternar Modo Claro';
        } else {
            btnDarkMode.textContent = 'Alternar Modo Escuro';
        }
    });

    // 2. Mostrar/Ocultar Seção Oculta (Impactos Reais)
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    const infoExtra = document.getElementById('info-extra');

    btnSaibaMais.addEventListener('click', () => {
        const estaOculto = infoExtra.classList.contains('hidden');
        
        if (estaOculto) {
            infoExtra.classList.remove('hidden');
            btnSaibaMais.textContent = 'Ocultar Impactos';
        } else {
            infoExtra.classList.add('hidden');
            btnSaibaMais.textContent = 'Ver Impactos Reais';
        }
    });

    // 3. Captura e Tratamento do Formulário
    const formContato = document.getElementById('form-contato');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    formContato.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio tradicional e recarregamento da página

        // Captura de dados inseridos pelo usuário
        const nomeUsuario = document.getElementById('nome').value;
        const mensagemUsuario = document.getElementById('mensagem').value;

        // Processa as strings de forma dinâmica na interface
        msgSucesso.textContent = `Agradecemos seu envio, ${nomeUsuario}! Analisaremos sua dúvida/relato sobre: "${mensagemUsuario.substring(0, 35)}..." e enviaremos atualizações educativas.`;
        
        // Exibe o retorno visual positivo
        msgSucesso.classList.remove('hidden');

        // Limpa os campos de texto do formulário
        formContato.reset();
    });
});

// 4. Validação Interativa do Quiz (Fora do escopo comum para simplificar a chamada inline do HTML)
function verificarResposta(tipoResposta) {
    const campoResultado = document.getElementById('resultado-quiz');
    
    if (tipoResposta === 'correto') {
        campoResultado.textContent = "✅ Resposta Correta! Interromper a cadeia de compartilhamento e verificar em canais de imprensa oficiais é a atitude mais segura na sociedade digital.";
        campoResultado.style.backgroundColor = "rgba(56, 161, 105, 0.1)";
        campoResultado.style.color = "#38a169";
        campoResultado.style.border = "1px solid #38a169";
    } else {
        campoResultado.textContent = "❌ Alerta de Risco! Repassar alertas sem confirmação alimenta pânicos coletivos e propaga desinformação gerada por IA. Sempre investigue primeiro.";
        campoResultado.style.backgroundColor = "rgba(229, 62, 98, 0.1)";
        campoResultado.style.color = "#e53e3e";
        campoResultado.style.border = "1px solid #e53e3e";
    }
}
