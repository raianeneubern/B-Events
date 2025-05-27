document.addEventListener("DOMContentLoaded", () => {
    gerarCalendario(2025, 0); // Janeiro é mês 0
    iniciarCarrossel(); // Inicializa o carrossel lateral
});

function gerarCalendario(ano, mes) {
    const corpoCalendario = document.getElementById("calendar-body");
    if (!corpoCalendario) return;
    corpoCalendario.innerHTML = "";

    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);

    let data = 1;
    for (let i = 0; i < 6; i++) {
        const linha = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const celula = document.createElement("td");

            if (i === 0 && j < primeiroDia.getDay()) {
                celula.textContent = "";
            } else if (data > ultimoDia.getDate()) {
                break;
            } else {
                celula.textContent = data;
                if (data === 2) {
                    celula.style.backgroundColor = "#6a1b9a";
                    celula.style.borderRadius = "50%";
                }
                data++;
            }
            linha.appendChild(celula);
        }

        corpoCalendario.appendChild(linha);
    }
}

function showTodayEvents() {
    alert("Hoje temos o evento: Barra Rock Fest!");
}

function showMonthEvents() {
    alert("Eventos do mês: Barra Rock Fest, Baile Folia, Barra Ponta, Bloco do Galo, Adote um Pet.");
}

function iniciarCarrossel() {
    // Inicializa o carrossel lateral
    $(document).ready(function(){
        $('.carousel').slick({
            infinite: true,   // Permite que o carrossel continue infinitamente
            speed: 5000,       // Duração da transição
            autoplay: false,  // Desabilita o autoplay
            arrows: true,     // Habilita as setas de navegação
            prevArrow: '<button type="button" class="prev">←</button>',  // Personalização da seta anterior
            nextArrow: '<button type="button" class="next">→</button>'   // Personalização da seta seguinte
        });
    });

}