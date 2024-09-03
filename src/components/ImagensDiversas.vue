<template>
      
      <div>
            <button @click="toggleImages">{{ showImages ? 'Esconder Imagens' : 'Carregar Imagens' }}</button>
            <br>
            <div id="imagemGrande" v-if="showImages">
                  <img src="@/assets/pexels-eberhard-grossgasteiger-691668 (1).jpg" alt="Imagem 1" width="50%">
            </div>
            <br>
            
            <br>
            <article class="flexbox" v-if="showImages">
                  <img src="@/assets/pexels-mohamed-almari-1485894.jpg" alt="Imagem 2" width="350" height="300">
                  <img src="@/assets/pexels-pok-rie-2049422.jpg" alt="Imagem 3" width="350" height="300">
                  <img src="@/assets/images (9).jpeg" alt="Imagem 3" width="350" height="300">
            </article>
            <br>
            
      </div>
</template>

<script>
export default {
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
}
</script>

<style>
#imagemGrande {
      margin-top: 20px;
      display: flex;
      justify-content: center;
}

#imagemGrande img {
      border: 2px solid #000;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(138, 138, 138, 0.554);
}

.flexbox {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
}

button {
      margin-top: 10px;
      background-color: #00014b;
      color: #fff;
      padding: 10px 60px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
}
</style>