const fs = require('fs')
const path = require('path')
const imageDataURI = require('image-data-uri')
const audio = require('./build/audio.json')
var glob = require('glob')

;(async () => {
  audio.src = await Promise.all(
    audio.src.map((fname) => {
      console.log(fname)
      return imageDataURI.encodeFromFile(path.join(__dirname, fname))
    })
  )

  fs.writeFileSync(
    path.join(__dirname, 'build/audiob64.json'),
    JSON.stringify(audio, null, 2)
  )

  const images = {}
  await new Promise((resolve) => {
    glob('./build/*.png', {}, async (er, files) => {
      await Promise.all(
        files.map(async (fname) => {
          console.log(fname)

          const data = await imageDataURI.encodeFromFile(
            path.join(__dirname, fname)
          )
          const key = path.basename(fname, path.extname(fname))
          images[key] = data
        })
      )
      resolve()
    })
  })

  fs.writeFileSync(
    path.join(__dirname, 'build/imageb64.json'),
    JSON.stringify(images, null, 2)
  )
})()
