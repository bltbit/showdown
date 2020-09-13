const fs = require('fs')
const path = require('path')
const imageDataURI = require('image-data-uri')

imageDataURI
  .encodeFromFile(path.join(__dirname, './exported/sounds/Bang.mp3'))

  // RETURNS image data URI :: 'data:image/png;base64,PNGDATAURI/'
  .then((res) =>
    fs.writeFileSync(
      path.join(__dirname, 'data.ts'),
      `
  export default {
    Bang: \`${res}\`,
  }
  
  `
    )
  )
