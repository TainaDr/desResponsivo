<template>
      <header></header>
      <h1>Imagens | Desenvolvimento Responsivo - Aula 1</h1>
      <h3>Tainá Dreissig | IIW2022B</h3>
      <footer></footer>

      <div>
            <router-link style="margin-left: 0px;" to="/imagens">Imagens</router-link>
            <router-link style="margin-left: 10px;" to="/video">Vídeo</router-link>
            <router-link style="margin-left: 10px;" to="/tabela">Tabela</router-link>
            <router-view />
      </div>

      <div>
            <button @click="toggleImages">
                  {{ showImages ? 'Esconder Imagens Grandes' : 'Carregar Imagens Grandes' }}
            </button>
            <br>
            <article class="flexbox" v-if="showImages">
                  <br>
                  <img id="img1" src="@/assets/arco-iris-no-final-de-uma-paisagem-rodoviaria.jpg" alt="Imagem 1">
                  <img id="img2" src="@/assets/arvore-fotorrealista-com-galhos-e-tronco-ao-ar-livre-na-natureza.jpg"
                        alt="Imagem 2">
                  <img id="img3"
                        src="@/assets/folhas-frescas-de-outono-revelam-padrao-organico-vibrante-gerado-por-ia.jpg"
                        alt="Imagem 3">
            </article>
            <br>
      </div>
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
div {
      text-align: center;
}

h1,
h3 {
      text-align: center;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

header,
footer {
      background-color: rgb(63, 0, 78);
      height: 20px;
      margin: 0;
}

img {
      border: 4px solid #480052;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(138, 138, 138, 0.554);
      max-width: 100%;
      height: auto;
}

article {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
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
}

@media (max-width: 768px) {
      h1 {
            font-size: 1.5rem;
      }

      h3 {
            font-size: 1rem;
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

      button {
            padding: 8px 6px;
            font-size: 0.7rem;
      }
}
</style>