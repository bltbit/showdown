/* @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Howl } from 'howler'
import React, { useCallback, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import audioConfig from './build/audiob64.json'
import imageConfig from './build/imageb64.json'
import { SpriteNames } from './build/SpriteNames'
const CYLINDER_CAPACITY = 6
const GUN_ACTION_DELAY = 100

const styling = css`
  .cylinder {
    width: 100%;
    height: 100%;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
    }
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
const SHOT_ROTATION_ANGLE = 60

const foo = React // so organize imports doesn't remove it

export const useRevolver = () => {
  const [bulletsInCylinder, setBulletsInCylinder] = useState(CYLINDER_CAPACITY)
  const [cylinderRotationProps, setCylinderRotationProps] = useSpring(() => ({
    angle: STARTING_ANGLE,
    config: { duration: 50 },
  }))

  const gunStatusRef = useRef({ isBusy: false })

  const howlRef = useRef(new Howl(audioConfig))

  const handleTriggerPull = useCallback(() => {
    if (gunStatusRef.current.isBusy) return
    gunStatusRef.current.isBusy = true
    setTimeout(() => {
      gunStatusRef.current.isBusy = false
    }, GUN_ACTION_DELAY)

    setCylinderRotationProps({
      angle: cylinderRotationProps.angle.getValue() + SHOT_ROTATION_ANGLE,
    })

    if (bulletsInCylinder === 0) {
      howlRef.current?.play(SpriteNames.Empty)
      return
    }

    setBulletsInCylinder((c) => c - 1)
    howlRef.current?.play(SpriteNames.Bang)
  }, [bulletsInCylinder])

  const Image = () => (
    <div css={styling}>
      <animated.div
        className="cylinder"
        style={{
          transform: cylinderRotationProps.angle.interpolate(
            (a) => `rotate(${a}deg)`
          ),
        }}
      >
        <img src={imageConfig.cylinder} />
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
      </animated.div>
    </div>
  )

  return { handleTriggerPull, Image }
}
