'use strict';

const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');


if (require.main === module) {
  main({ argv: process.argv })
}


function main(options) {
  var argv = options.argv
  var process = argv[2]
  imagemin(['src/**/*.{jpg,png,gif,svg}'], {
    plugins: [
      imageminMozjpeg({ quality: '80' }),
      imageminPngquant({ quality: [.7, .85]}),
      imageminGifsicle(),
      imageminSvgo()
    ],
    replaceOutputDir: output => {
      if (process == "build") {
        return output.replace(/src\//, 'dist/');
      } else if (process == "result") {
        return output.replace(/src\//, 'result/');
      }
    }
  }).then(() => {
    console.log('Images optimized');
  });

}
