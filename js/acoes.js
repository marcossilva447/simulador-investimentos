// URL base da API
const apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY';

// chave da API
const apiKey = 'LKLFTH597ZD0OAOO';

// Função para buscar cotações de ativos
function buscarCotacaoAtivo(nomeAtivo) {
    // Construir a URL completa
    const url = `${apiURL}&symbol=${nomeAtivo}&apikey=${apiKey}`;

    // Fazer a chamada da API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Exibir os dados
            console.log(data);
        })
        .catch(error => {
            // Tratar qualquer erro que ocorra durante a chamada da API
            console.error('Erro ao buscar cotação do ativo:', error);
        });
}

// Função para lidar com o evento de envio do formulário
function handleFormSubmit(event) {
    // Prevenir o comportamento padrão do formulário
    event.preventDefault();

    // Obter o valor do campo de entrada
    const nomeAtivo = document.getElementById('nome-ativo').value;

    // Chamar a função para buscar a cotação do ativo
    buscarCotacaoAtivo(nomeAtivo);
}

// Adicionar o manipulador de eventos ao formulário quando a página for carregada
window.onload = function() {
    document.getElementById('form-busca').addEventListener('submit', handleFormSubmit);
};
