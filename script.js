function adicionarBandeiras() {
    const secoesLugar = document.querySelectorAll('section.lugar');
    
    secoesLugar.forEach(secao => {
        const img = document.createElement('img');

        // coletando o codigo do pais para a chamada da api
        const codigoPais = secao.dataset.pais;
        
        // chamando a api para coletar a imagem de cada pais
        img.src = `https://flagcdn.com/w320/${codigoPais}.png`;
        img.alt = 'Bandeira do país';
        img.className = 'bandeira';

        // inserindo a imagem abaixo do titulo
        const h2 = secao.querySelector('h2');
        if (h2) h2.insertAdjacentElement('afterend', img);
    });
}

function atualizarAnimacaoScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        const scrollProgress = 0.95 - (rect.top / window.innerHeight);
        
        section.style.setProperty('--scroll', scrollProgress);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    adicionarBandeiras();
    atualizarAnimacaoScroll();
});

window.addEventListener('scroll', atualizarAnimacaoScroll);