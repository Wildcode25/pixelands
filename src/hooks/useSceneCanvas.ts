import { Character } from "@/classes/character"
import { Sprite } from "@/classes/sprite"
import { Stage } from "@/classes/stage"
import { NARUTO_ANIMATION_STATES, GOKU_ANIMATION_STATES, ICHIGO_ANIMATION_STATES } from "@/constants"
import { useCallback, useEffect, useRef } from "react"
export const useSceneCanvas = () => {


    const sceneCanvasRef = useCallback((canvas: HTMLCanvasElement) => {
        
        if (canvas ) {
            const ctx = canvas.getContext('2d')
            if(ctx){
                const spritesRef = 
                [
                    new Stage({backgroundStates: [
                        {
                            name: 'default',
                            frames: 1
                        }

                    ],
                    width: 850,
                    height: 720,
                    platformStates: [{
                        name: 'default',
                        frames: 1
                    }],
                    platformSpriteHeight: 127,
                    platformHeight: 127,
                    platformWidth: 355,
                    platformSpriteWidth: 355,
                    src: {
                        backgroundUrl: '/sprites/stages/WildStorm/background.png',
                        platformUrl: '/sprites/stages/WildStorm/platform.png'
                    },
                    spriteHeight: 400,
                    spriteWidth: 720,
                    ctx
                })
                    ,
                    new Character({
                        ctx,
                        width: 180,
                        height: 180,
                        src: {
                            characterUrl: '/sprites/naruto/sheet.png'
                        },
                        characterStates: NARUTO_ANIMATION_STATES,
                        position: {
                            x: 200,
                            y: 460,
                        }
                    }),
                    new Character({
                        ctx,
                        width: 180,
                        height: 180,
                        src: {
                            characterUrl: '/sprites/goku/sheet.png'
                        },
                        characterStates: GOKU_ANIMATION_STATES,
                        position: {
                            x: 250,
                            y: 460
                        }
                    }),
                    new Character({
                        ctx,
                        width: 180,
                        height: 180,
                        src: {
                            characterUrl: '/sprites/ichigo/sheet.png'
                        },
                        characterStates: ICHIGO_ANIMATION_STATES,
                        position: {
                            x: 350,
                            y: 460
                        }
                    })

                ]
            document.addEventListener('keydown', (e)=>{
                console.log(e)
                
                if(e.key === 'ArrowLeft'){
                    spritesRef[1].walk()
                    spritesRef[1].direction = 'left'
                }
                if(e.key === 'ArrowRight'){
                    spritesRef[1].direction = 'right'
                    spritesRef[1].walk()
                }
                if(e.key === 'ArrowUp'){
                    spritesRef[1].jump()
                }
            })
            document.addEventListener('keyup', (e)=>{
                if(!spritesRef[1].isInTheAir)
                spritesRef[1].characterState = 'default'
                
            })    
            const animate = () => {

                if (ctx) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    spritesRef.forEach((sprite) => {
                        spritesRef[1].update()
                        sprite.draw()
                        ctx.restore()

                    })
                }

                requestAnimationFrame(animate)
            }
            animate()
            }
        }

    }, [])


    return { sceneCanvasRef }
}