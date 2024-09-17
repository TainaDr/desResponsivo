const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = './src/assets/images'; // Pasta de entrada das imagens
const outputFolder = './dist/assets/images'; // Pasta de saída das imagens otimizadas

fs.readdir(inputFolder, (err, files) => {
      if (err) throw err;

      files.forEach(file => {
            const inputPath = path.join(inputFolder, file);
            const outputPath = path.join(outputFolder, file);

            sharp(inputPath)
                  .resize({ width: 800 }) // Redimensionar a imagem para uma largura de 800px
                  .toFormat('jpeg', { quality: 80 }) // Converter para JPEG com 80% de qualidade
                  .toFile(outputPath, (err) => {
                        if (err) throw err;
                        console.log(`${file} otimizada!`);
                  });
      });
});
