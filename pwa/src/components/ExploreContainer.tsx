/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useRevolver } from '../guns/revolver'

interface ContainerProps {}

const styling = css({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
})

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { handleTriggerPull } = useRevolver()
  return (
    <div css={styling} onTouchStart={handleTriggerPull}>
      Showdown is about to begin.
    </div>
  )
}

export default ExploreContainer
