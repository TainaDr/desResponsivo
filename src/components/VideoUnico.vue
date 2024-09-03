<template>
<br>
<button @click="toggleVideo">{{ showVideo ? 'Esconder Vídeo' : 'Carregar Vídeo' }}</button>
      <div id="video" v-if="showVideo">
            
            <iframe id="video" width="70%" height="515"
                  src="https://www.youtube.com/embed/sVnfv3-SeuU?si=KvnzSI5xdwZEru8u" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe></div>
      <br>

</template>

<script>

export default {
      data() {
            return {
                  showVideo: false
            };
      },
      methods: {
            toggleVideo() {
                  this.showVideo = !this.showVideo;
            }
      }
}
</script>

<style>
#video {
      margin-top: 20px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      
}

iframe {
      border: 2px solid #000;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(138, 138, 138, 0.554);
}

button {
      margin-top: 10px;
      background-color: #00014b;
      color: #fff;
      padding: 10px 60px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 10px;
}
</style>