<template>
    <div class="container">
        <H1>Imagens | Desenvolvimento Responsivo - Aula 1</H1>
        <h3>Tainá Dreissig | IIW2022B</h3>
        <div id="imagemGrande">
            <img src="@/assets/pexels-eberhard-grossgasteiger-691668 (1).jpg" alt="Imagem 1" width="100%">
        </div>
        <br>
        <article class="flexbox">
            <img src="@/assets/pexels-mohamed-almari-1485894.jpg" alt="Imagem 2" width="425" height="300">
            <img src="@/assets/pexels-pok-rie-2049422.jpg" alt="Imagem 3" width="425" height="300">
            <img src="@/assets/images (9).jpeg" alt="Imagem 3" width="425" height="300">
        </article>
        <br>
        <div id="video"><iframe id="video" width="100%" height="515"
                src="https://www.youtube.com/embed/sVnfv3-SeuU?si=KvnzSI5xdwZEru8u" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe></div>
        <br>

        <h3>Lista de Produtos</h3>
        <table border="2">
            <tr>
                <td>Item</td>
                <td>Nome Produto</td>
                <td>Imagem Produto</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Quadro Montanhas</td>
                <td><img src="@/assets/pexels-eberhard-grossgasteiger-691668 (1).jpg" alt="" width="50" height="50">
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Quadro Ponte</td>
                <td><img src="@/assets/pexels-mohamed-almari-1485894.jpg" alt="" width="50" height="50"></td>

            </tr>
            <tr>
                <td>3</td>
                <td>Quadro Praia</td>
                <td><img src="@/assets/pexels-pok-rie-2049422.jpg" alt="" width="50" height="50"></td>
            </tr>
        </table>
        <br>
        <footer></footer>
    </div>

</template>


<style scoped>
.container {
    text-align: center;
    margin-top: 50px;
}

.flexbox {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}

#imagemGrande {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}

H1,
h3 {
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#video {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}

header,
footer {
    background-color: rgb(0, 38, 76);
    height: 20px;
    margin: 0;
}

body {
    background-color: rgb(255, 255, 255);
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

@media screen and (max-width: 600px) {

    table,
    thead,
    tbody,
    th,
    td,
    tr {
        display: block;
    }

    th,
    td {
        border: none;
        border-bottom: 1px solid #ddd;
        width: 100%;
    }
}
</style>