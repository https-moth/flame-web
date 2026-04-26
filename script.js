const botaoNao = document.querySelector('.nao');

botaoNao.addEventListener('mouseover', () => {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosX = Math.random() * (larguraJanela - botaoNao.offsetWidth);
    const novaPosY = Math.random() * (alturaJanela - botaoNao.offsetHeight);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${novaPosX}px`;
    botaoNao.style.top = `${novaPosY}px`;
});