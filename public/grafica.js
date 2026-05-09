let myChartInstance = null;

// Función para renderizar la gráfica comparativa
window.renderMyChart = (datos) => {
    const ctx = document.getElementById('graficaInventario').getContext('2d');

    // Destruimos la gráfica anterior si existe, para que no colisionen al redibujar
    if (myChartInstance) {
        myChartInstance.destroy();
    }

    const nombres = datos.map(p => p.nombre);
    const stocks = datos.map(p => p.stock);
    const precios = datos.map(p => parseFloat(p.precio) || 0);
    const costos = datos.map(p => parseFloat(p.costo) || 0);

    myChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombres,
            datasets: [
                { 
                    label: 'Stock', 
                    data: stocks, 
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1 
                },
                { 
                    label: 'Venta ($)', 
                    data: precios, 
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1 
                },
                { 
                    label: 'Costo ($)', 
                    data: costos, 
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1 
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
        }
    });
};