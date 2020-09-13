import { Howl } from 'howler'
import { useCallback, useRef, useState } from 'react'
import data from './data'
const CYLINDER_CAPACITY = 6

export const useRevolver = () => {
  const [bulletsInCylinder, setBulletsInCylinder] = useState(CYLINDER_CAPACITY)

  const howlRef = useRef(
    new Howl({
      src: [data.Bang],
    })
  )

  const handleTriggerPull = useCallback(() => {
    if (bulletsInCylinder === 0) return
    setBulletsInCylinder((c) => c - 1)
    howlRef.current?.play()
  }, [bulletsInCylinder])

  return { handleTriggerPull }
}
