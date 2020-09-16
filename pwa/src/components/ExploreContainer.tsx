/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useRevolver } from '../guns/revolver'

interface ContainerProps {}

const styling = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .gunControl {
    position: absolute;
    width: 130px;
    height: 50px;
    background-color: red;
    bottom: 5px;
    right: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    .gunImage {
      width: 45px;
      height: 45px;
      position: absolute;
      right: 5px;
      top: 3px;
    }
  }
`

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { handleTriggerPull, Image } = useRevolver()
  return (
    <div css={styling} onTouchStart={handleTriggerPull}>
      <div className="gunControl">
        <div className="gunImage">
          <Image />
        </div>
      </div>
    </div>
  )
}

export default ExploreContainer
