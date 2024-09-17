<template>
      <div class="container">
            
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
                        <td><img src="@/assets/images/pexels-eberhard-grossgasteiger-691668.jpg" alt="" width="50"
                                    height="50">
                        </td>
                  </tr>
                  <tr>
                        <td>2</td>
                        <td>Quadro Ponte</td>
                        <td><img src="@/assets/images/pexels-mohamed-almari-1485894.jpg" alt="" width="50" height="50"></td>
                  </tr>
                  <tr>
                        <td>3</td>
                        <td>Quadro Praia</td>
                        <td><img src="@/assets/images/pexels-pok-rie-2049422.jpg" alt="" width="50" height="50"></td>
                  </tr>
            </table>
            <br>
            
      </div>
</template>

<script>
export default { 
      name: 'TabelaDiversos' 
}


</script>

<style>
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

.container {
      text-align: center;
      margin-top: 50px;
}
</style>
