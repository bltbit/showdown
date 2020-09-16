/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Howl } from 'howler'
import React, { useRef } from 'react'

interface ContainerProps {}

const styling = css({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'hidden',
})

const ExploreContainer: React.FC<ContainerProps> = () => {
  const howlRef = useRef(
    new Howl({
      src: ['./assets/sounds/Bang.mp3'],
    })
  )
  const handleTriggerPull = () => {
    howlRef.current?.play()
  }
  return (
    <div css={styling} onTouchStart={handleTriggerPull}>
      Showdown is about to begin.
    </div>
  )
}

export default ExploreContainer
