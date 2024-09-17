<template>
      <header>
            <menu>
                  <li>Menu </li>
                  <li>Sobre </li>
                  <li>Contato </li>
            </menu>
      </header>
      <h1>Imagens | Desenvolvimento Responsivo</h1>
      <h3>Tainá Dreissig | IIW2022B</h3>

      <div>
            <button @click="toggleImages">
                  {{ showImages ? 'Esconder Imagens' : 'Carregar Imagens' }}
            </button>
            <br>
            <article class="flexbox" v-if="showImages">
                  <br>
                  <img id="img1" loading="lazy"  rel="preload" src="@/assets/images/arco-iris-no-final-de-uma-paisagem-rodoviaria.webp" alt="Imagem 1"
                        class="fade-in">
                  <h4>"Serenidade em Cores" - Uma Jornada Interior</h4>
                  <p>Este quadro, intitulado "Serenidade em Cores", não é apenas uma obra de arte, mas uma experiência
                        visual que transporta o observador para um estado de tranquilidade e introspecção. As
                        tonalidades suaves e harmoniosas convidam à contemplação, enquanto as pinceladas fluidas sugerem
                        um movimento sereno, quase como uma meditação. Ideal para espaços de descanso ou meditação, esta
                        peça agrega valor ao seu ambiente ao promover uma atmosfera de calma e equilíbrio. Adquira este
                        quadro para transformar qualquer cômodo em um refúgio de paz.</p>
                  <img id="img2" loading="lazy"  rel="preload" src="@/assets/images/arvore-fotorrealista-com-galhos-e-tronco-ao-ar-livre-na-natureza.webp"
                        alt="Imagem 2" class="fade-in">
                  <h4>"Reflexos da Alma" - A Profundidade do Sentir</h4>
                  <p>"Reflexos da Alma" é mais do que um quadro, é um portal para o interior do ser humano. As cores
                        profundas e os elementos abstratos convidam o espectador a uma viagem introspectiva, revelando
                        sentimentos ocultos e pensamentos subconscientes. Esta obra de arte é perfeita para quem
                        valoriza a profundidade emocional e a introspecção, sendo uma peça central que não apenas
                        embeleza, mas também inspira e provoca reflexão. Um acréscimo poderoso para qualquer ambiente
                        que busca uma atmosfera de profundidade e significado.
                  </p>
                  <img id="img3"  loading="lazy" rel="preload"
src="@/assets/images/folhas-frescas-de-outono-revelam-padrao-organico-vibrante-gerado-por-ia.webp" alt="Imagem 3" class="fade-in">
                  <h4>"Explosão de Emoções" - A força das cores</h4>
                  <p>"Explosão de Emoções" é um quadro que captura a intensidade e a paixão da vida em suas mais
                        vibrantes manifestações. As cores audaciosas e contrastantes se entrelaçam em um jogo dinâmico,
                        evocando sentimentos de energia, entusiasmo e vitalidade. Perfeito para ambientes que necessitam
                        de um toque de ousadia e personalidade, esta obra não só decora, mas também desperta emoções e
                        estimula a criatividade. Um verdadeiro ícone de expressão artística que pode transformar o seu
                        espaço em um cenário vibrante e cheio de vida.</p>
            </article>
            <br>
      </div>
      <footer></footer>
</template>

<script>
export default {
      name: 'MenuPrincipal',
      data() {
            return {
                  showImages: false
            };
      },
      methods: {
            toggleImages() {
                  this.showImages = !this.showImages;
            }
      }
};
</script>

<style>
body {
      margin: 0;
}

div {
      text-align: center;
}

menu {
      display: flex;
      justify-content: end;
      padding: 0;
      margin: 0;
      color: #fff;
      list-style-type: none;
}

menu li {
      margin-right: 20px;
      margin-left: 10px;
      margin-top: 20px;
}

p {
      text-align: justify;
      margin: 0 auto;
      max-width: 800px;
}

h4 {
      margin: 0 auto;
      max-width: 800px;
      font-weight: bold;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color: black;
}

h1,
h3 {
      text-align: center;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color: #000;
}

header {
      background-color: rgb(63, 0, 78);
      height: 60px;
      margin: 0;
}

img {
      border: 2px solid #480052;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(138, 138, 138, 0.554);
      max-width: 100%;
      height: auto;
      margin: 20px 0;
}

article {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
}

button {
      margin-top: 10px;
      background-color: #39004b;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      font-size: 1rem;
}

@media (max-width: 1200px) {
      button {
            padding: 10px 15px;
            font-size: 0.9rem;
      }
      article {
            max-width: 1000px;
            margin: 0 auto;
      }
}

@media (max-width: 768px) {
      h1 {
            font-size: 1.5rem;
      }
      h3 {
            font-size: 1rem;
      }
      p,
      h4 {
            margin: 0 10px;
            max-width: 100%;
      }
      article {
            flex-direction: column;
            align-items: center;
      }
      button {
            padding: 10px 10px;
            font-size: 0.8rem;
      }
}

@media (max-width: 480px) {
      h1 {
            font-size: 1.25rem;
      }
      h3 {
            font-size: 0.875rem;
      }
      p,
      h4 {
            margin: 0 5px;
            max-width: 100%;
            font-size: 0.9rem;
      }
      button {
            padding: 8px 6px;
            font-size: 0.7rem;
      }
}
</style>
