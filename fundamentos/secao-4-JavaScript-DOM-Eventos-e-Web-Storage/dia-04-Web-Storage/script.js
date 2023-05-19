window.onload = () => {

  // Cor de fundo da tela;
  const corDeFundo = (cor) => {
    const main = document.querySelector('main');
    main.style.backgroundColor = cor;
    localStorage.setItem('backgroundColor', cor);
  }
  const colorButtons = document.querySelectorAll("#background-color>button");
  for (const button of colorButtons) {
    button.addEventListener('click', (event) => {
      corDeFundo(event.target.innerText);
    })
  }
  corDeFundo(localStorage.getItem('backgroundColor'));
  
  // Cor do texto;
  const corDoTexto = (cor) => {
    const main = document.querySelector('main');
    main.style.color = cor;
    localStorage.setItem('textColor', cor)
  };
  const textButtons = document.querySelectorAll('#font-color>button');
  for (const button of textButtons) {
    button.addEventListener('click', (event) => {
      corDoTexto(event.target.innerText)
    })
  }
  corDoTexto(localStorage.getItem('textColor'));

  // Tamanho da fonte;
  const tamanhoFonte = (tamanho) => {
    const paragrafo = document.getElementsByClassName('paragraph');
    for (const i of paragrafo) {
      i.style.fontSize = tamanho;
    }
    const titulo = document.querySelector('h1');
    titulo.style.fontSize = `${parseInt(tamanho) * 1.5}pt`

    const subtitulo = document.querySelector('h3');
    subtitulo.style.fontSize = `${parseInt(tamanho) * 1.17}pt`

    localStorage.setItem('fontSize', tamanho)
  }
  const sizeButtons = document.querySelectorAll('#font-size>button');
  for (const button of sizeButtons) {
    button.addEventListener('click', (event) => {
      tamanhoFonte(event.target.innerText)
    })
  }
  tamanhoFonte(localStorage.getItem('fontSize'));

  // Espaçamento entre as linhas do texto;
  const espacamento = (altura) => {
    const paragrafo = document.getElementsByClassName('paragraph');
    for (const i of paragrafo) {
      i.style.lineHeight = altura
    }
    localStorage.setItem("lineHeight", altura)
  }
  const lineButtons = document.querySelectorAll('#line-height>button');
  for (const button of lineButtons) {
    button.addEventListener('click', (event) => {
      espacamento(event.target.innerText)
    })
  }
  espacamento(localStorage.getItem("lineHeight"));

  // Tipo da fonte (Font family).
  const familiaFonte = (fonte) => {
    const main = document.querySelector('main');
    main.style.fontFamily = fonte;
    localStorage.setItem('fontFamily', fonte)
  }
  const fontButtons = document.querySelectorAll('#font-family>button');
  for (const button of fontButtons) {
    button.addEventListener('click', (event) => {
      familiaFonte(event.target.innerText)
    })
  }
  familiaFonte(localStorage.getItem('fontFamily'));

};
