import { Howl } from 'howler'
import { useCallback, useRef, useState } from 'react'
import audioConfig from './build/audio.json'
import { SpriteNames } from './build/SpriteNames'

const CYLINDER_CAPACITY = 6

export const useRevolver = () => {
  const [bulletsInCylinder, setBulletsInCylinder] = useState(CYLINDER_CAPACITY)

  const howlRef = useRef(new Howl(audioConfig))

  const handleTriggerPull = useCallback(() => {
    if (bulletsInCylinder === 0) {
      howlRef.current?.play(SpriteNames.Empty)
      return
    }
    setBulletsInCylinder((c) => c - 1)
    howlRef.current?.play(SpriteNames.Bang)
  }, [bulletsInCylinder])

  return { handleTriggerPull }
}
