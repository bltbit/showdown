/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

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
  const handleClick = () => {
    console.log('Click')
  }
  return (
    <div css={styling} onClick={handleClick}>
      Showdown is about to begin.
    </div>
  )
}

export default ExploreContainer
