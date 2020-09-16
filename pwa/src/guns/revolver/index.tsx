/** @jsx jsx **/
import { css, jsx } from '@emotion/core'
import { Howl } from 'howler'
import React, { TouchEvent, useCallback, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Shot } from '../../components/ExploreContainer'
import audioConfig from './build/audiob64.json'
import imageConfig from './build/imageb64.json'
import { SpriteNames } from './build/SpriteNames'

const styling = css`
  .cylinder {
    width: 100%;
    height: 100%;
    position: absolute;
    &.spinning {
      animation-name: spin;
      animation-duration: 500ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
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
      }
      & .bullet-spent {
        background-color: rgba(0, 0, 0, 0.6);
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
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

const CYLINDER_CAPACITY = 6
const GUN_ACTION_DELAY = 100
const STARTING_ANGLE = 33
const SHOT_ROTATION_ANGLE = 60
const MAX_RELOADS = 3
const SHOT_WIDTH = 20
const SHOT_HEIGHT = 20

export const useRevolver = () => {
  const [spareBulletsRemaining, setSpareBulletsRemaining] = useState(
    MAX_RELOADS * CYLINDER_CAPACITY
  )
  const [bulletsInCylinder, setBulletsInCylinder] = useState(CYLINDER_CAPACITY)
  const [cylinderRotationProps, setCylinderRotationProps] = useSpring(() => ({
    angle: STARTING_ANGLE,
    config: { duration: 50 },
  }))
  const [isReloading, setIsReloading] = useState(false)

  const gunStatusRef = useRef({ isBusy: false })

  const howlRef = useRef(new Howl(audioConfig))

  const handleTriggerPull = useCallback(
    (e: TouchEvent<HTMLDivElement>): Shot | undefined => {
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

      const { clientX, clientY } = e.touches[0]
      return {
        x: clientX,
        y: clientY,
        w: SHOT_WIDTH,
        h: SHOT_HEIGHT,
        render: () => (
          <div
            style={{
              backgroundColor: 'red',
              width: SHOT_WIDTH,
              height: SHOT_HEIGHT,
            }}
          ></div>
        ),
      }
    },
    [bulletsInCylinder, cylinderRotationProps, setCylinderRotationProps]
  )

  const handleReload = useCallback(() => {
    if (gunStatusRef.current.isBusy) return
    gunStatusRef.current.isBusy = true
    setIsReloading(true)
    howlRef.current?.play(SpriteNames.Reload)
    setTimeout(() => {
      gunStatusRef.current.isBusy = false
      const bulletsNeededForReload = CYLINDER_CAPACITY - bulletsInCylinder
      const bulletsAddedForReload = Math.min(
        bulletsNeededForReload,
        spareBulletsRemaining
      )
      const newSpareBulletsRemaining = Math.max(
        0,
        spareBulletsRemaining - bulletsAddedForReload
      )
      setSpareBulletsRemaining(newSpareBulletsRemaining)

      const newBulletsInCylinder = bulletsInCylinder + bulletsAddedForReload
      setBulletsInCylinder(newBulletsInCylinder)

      setCylinderRotationProps({
        angle:
          STARTING_ANGLE +
          SHOT_ROTATION_ANGLE * (CYLINDER_CAPACITY - newBulletsInCylinder),
      })
      setIsReloading(false)
    }, audioConfig.sprite.Reload[1] - 400)
  }, [bulletsInCylinder, spareBulletsRemaining])

  const Image: React.FC = () => (
    <div css={styling}>
      <animated.div
        className={isReloading ? `cylinder spinning` : `cylinder`}
        style={{
          transform: cylinderRotationProps.angle.interpolate(
            (a) => `rotate(${a}deg)`
          ),
        }}
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
      </animated.div>
    </div>
  )

  return {
    handleTriggerPull,
    Image,
    handleReload,
    spareBulletsRemaining,
  }
}
