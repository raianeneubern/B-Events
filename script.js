document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    links.forEach(link => {
        link.addEventListener("click", function() {
            // Remove a classe "active" de todas as abas e conteúdos
            links.forEach(item => item.classList.remove("active"));
            contents.forEach(item => item.classList.remove("active"));

            // Adiciona a classe "active" na aba clicada e no conteúdo correspondente
            this.classList.add("active");
            const target = document.getElementById(this.dataset.tab);
            target.classList.add("active");
        });
    });
});
