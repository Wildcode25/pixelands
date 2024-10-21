import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type StateType, type SpriteAnimation } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const buildSpriteAnimations = ({states, spriteWidth, spriteHeight}:{states: StateType[], spriteWidth: number, spriteHeight: number} )=>{
  console.log(spriteHeight)
  return Object.fromEntries(states.map((state, stateIndex) => {
    const { frames, name } = state
    const loc = Array(frames).fill(0).map((_, frameIndex) => {
        const positionX = frameIndex * spriteWidth
        const positionY = stateIndex * spriteHeight
        return {
            x: positionX,
            y: positionY
        }
    }) as []
    return [name, {loc}]
}))
}
export function getStateFrame({spriteAnimation, renderSpeed, frame}:{spriteAnimation: SpriteAnimation, renderSpeed:number, frame: number}) {
  const position = Math.floor(frame / renderSpeed) % spriteAnimation.loc.length
  const frameX = spriteAnimation.loc[position].x
  const frameY = spriteAnimation.loc[position].y
  return {
      x: frameX,
      y: frameY,
  }
}
