/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Howl } from 'howler'
import React, { useCallback, useRef, useState } from 'react'

interface ContainerProps {}

const styling = css({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
})

const CYLINDER_CAPACITY = 6

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [bulletsInCylinder, setBulletsInCylinder] = useState(CYLINDER_CAPACITY)
  const howlRef = useRef(
    new Howl({
      src: ['./assets/sounds/Bang.mp3'],
    })
  )

  const handleTriggerPull = useCallback(() => {
    if (bulletsInCylinder === 0) return
    setBulletsInCylinder((c) => c - 1)
    howlRef.current?.play()
  }, [bulletsInCylinder])

  return (
    <div css={styling} onTouchStart={handleTriggerPull}>
      Showdown is about to begin.
    </div>
  )
}

export default ExploreContainer
