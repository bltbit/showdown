import { Howl } from 'howler'
import { useCallback, useRef, useState } from 'react'
import audioConfig from './build/audio.json'
import { SpriteNames } from './build/SpriteNames'

const CYLINDER_CAPACITY = 6
const GUN_ACTION_DELAY = 100

export const useRevolver = () => {
  const [bulletsInCylinder, setBulletsInCylinder] = useState(CYLINDER_CAPACITY)
  const gunStatusRef = useRef({ isBusy: false })

  const howlRef = useRef(new Howl(audioConfig))

  const handleTriggerPull = useCallback(() => {
    if (gunStatusRef.current.isBusy) return
    gunStatusRef.current.isBusy = true
    setTimeout(() => {
      gunStatusRef.current.isBusy = false
    }, GUN_ACTION_DELAY)

    if (bulletsInCylinder === 0) {
      howlRef.current?.play(SpriteNames.Empty)
      return
    }

    setBulletsInCylinder((c) => c - 1)
    howlRef.current?.play(SpriteNames.Bang)
  }, [bulletsInCylinder])

  return { handleTriggerPull }
}
