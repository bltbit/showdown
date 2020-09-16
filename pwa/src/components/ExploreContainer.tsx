/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { FC, TouchEvent, useState } from 'react'
import { useRevolver } from '../guns/revolver'

interface ContainerProps {}

const styling = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  .shot {
    background-color: red;
    position: absolute;
  }
  .gunControl {
    position: absolute;
    width: 110px;
    height: 50px;
    bottom: 5px;
    right: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    .reloads {
      position: absolute;
      font-size: 50px;
      width: 63px;
      text-align: center;
      top: -5px;
    }
    .gunImage {
      width: 45px;
      height: 45px;
      position: absolute;
      right: 5px;
      top: 3px;
    }
  }
`

export type Shot = {
  x: number
  y: number
  w: number
  h: number
  render: FC
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const {
    handleTriggerPull,
    Image,
    handleReload,
    spareBulletsRemaining,
  } = useRevolver()

  const [activeShots, setActiveshots] = useState<Shot[]>([])

  const _handleTriggerPull = (e: TouchEvent<HTMLDivElement>) => {
    const shot = handleTriggerPull(e)
    if (!shot) return // Misfire, out of ammo, something
    setActiveshots((s) => [...s, shot])
  }

  return (
    <div css={styling} onTouchStart={_handleTriggerPull}>
      {activeShots.map(({ x, y, w, h }, i) => (
        <div
          key={i}
          className="shot"
          style={{
            top: y - h / 2,
            left: x - w / 2,
            width: w,
            height: h,
          }}
        ></div>
      ))}
      <div className="gunControl" onTouchStart={handleReload}>
        <div className="reloads">{spareBulletsRemaining}</div>
        <div className="gunImage">
          <Image />
        </div>
      </div>
    </div>
  )
}

export default ExploreContainer
