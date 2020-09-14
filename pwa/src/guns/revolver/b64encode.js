const fs = require('fs')
const path = require('path')
const imageDataURI = require('image-data-uri')
const audio = require('./build/audio.json')

;(async () => {
  audio.src = await Promise.all(
    audio.src.map((fname) => {
      console.log(fname)
      return imageDataURI.encodeFromFile(path.join(__dirname, fname))
    })
  )

  fs.writeFileSync(
    path.join(__dirname, 'build/audio.json'),
    JSON.stringify(audio, null, 2)
  )
})()
