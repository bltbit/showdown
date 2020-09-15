/** @jsx jsx **/
import { css, jsx } from '@emotion/core'
import { Howl } from 'howler'
import React, { useCallback, useRef, useState } from 'react'
import audioConfig from './build/audiob64.json'
import imageConfig from './build/imageb64.json'
import { SpriteNames } from './build/SpriteNames'

const CYLINDER_CAPACITY = 6
const GUN_ACTION_DELAY = 100

const styling = css`
  .cylinder {
    position: absolute;
    transform: rotate(30deg);
    .bullets {
      position: absolute;
      top: 0px;
      left: 0px;
      & .bullet {
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: green;
      }
      & .bullet-spent {
        background-color: black;
      }
      & .bullet-1 {
        top: 4px;
        left: 8px;
      }
      & .bullet-2 {
        top: 17px;
        left: 2px;
      }
      & .bullet-3 {
        top: 28px;
        left: 9px;
      }
      & .bullet-4 {
        top: 28px;
        left: 23px;
      }
      & .bullet-5 {
        top: 15px;
        left: 30px;
      }
      & .bullet-6 {
        top: 3px;
        left: 22px;
      }
    }
  }
`

const STARTING_ANGLE = 33

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

  const Image: React.FC = () => (
    <div css={styling}>
      <div
        className="cylinder"
        style={{ transform: `rotate(${STARTING_ANGLE}deg)` }}
      >
        <img src={imageConfig.cylinder} alt="" />
        <div className="bullets">
          {Array(CYLINDER_CAPACITY)
            .fill(0)
            .map((j, i) => (
              <div
                key={i}
                className={`bullet bullet-${i + 1} ${
                  CYLINDER_CAPACITY - bulletsInCylinder > i
                    ? `bullet-spent`
                    : ''
                }`}
              ></div>
            ))}
        </div>
      </div>
    </div>
  )

  return { handleTriggerPull, Image }
}
