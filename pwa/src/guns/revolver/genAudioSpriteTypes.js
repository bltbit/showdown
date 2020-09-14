const audioConfig = require('./build/audio.json')

const s = `
export enum SpriteNames {
    ${Object.keys(audioConfig.sprite)
      .map((k) => {
        return `${k} = '${k}'`
      })
      .join(',\n')}
}`

console.log(s)
