    document.getElementById('btnClima').addEventListener('click', verClima);

const apiKey = '8c6c0146f09a4181434a3a025548c790'; 

function verClima() {
    const ciudad = document.getElementById('ciudadInput').value.trim();
    if (!ciudad) {
        alert ("Por favor, ingrese una ciudad.");
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no era correcta');
            }
            return response.json();
        })
        .then(data => {
            showData(data);
        })
        .catch(error => {
            console.error('Error al obtener el Clima Actual:', error);
        });
}

function showData(data) {
    const contenedor = document.getElementById('actual');
    contenedor.innerHTML = '';

    const climaInfo = `
        <h2>Clima en ${data.name}</h2>
        <p>Temperatura: ${data.main.temp} °C</p>
    `;

    contenedor.innerHTML = climaInfo;
}
