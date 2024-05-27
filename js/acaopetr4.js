document.getElementById('form-busca').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SA&apikey=LKLFTH597ZD0OAOO';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var lastTradingDay = data['Meta Data']['3. Last Refreshed'];
            var lastCloseValue = data['Time Series (Daily)'][lastTradingDay]['4. close'];

            
            document.getElementById('ultimo-valor').textContent = 'Último valor da ação: ' + lastCloseValue;
        })
        .catch(error => console.error('Erro:', error));
});
