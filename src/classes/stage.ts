import {  SpriteAnimationsType, SpritePropsType, StateType } from "@/lib/types";
import { Sprite } from "./sprite";
import { buildSpriteAnimations, getStateFrame } from "@/lib/utils";

interface StagePropsType extends SpritePropsType{
     platformWidth: number
     platformHeight: number
     platformPosition: {
        x: number,
        y: number
     }
     platformSpriteWidth: number
     platformSpriteHeight: number
     src: {
        backgroundUrl: string
        platformUrl: string
     }
     backgroundStates: StateType[]
     platformStates: StateType[]
} 
export class Stage extends Sprite{
    platformImage: HTMLImageElement
    backgroundImage: HTMLImageElement
    platformWidth: number
    platformHeight: number
    platformSpriteWidth: number
    platformSpriteHeight: number
    src: {
        backgroundUrl: string,
        platformUrl: string
    }
    platformPosition: {
        x: number,
        y: number
    }
    backgroundSpriteAnimations: SpriteAnimationsType
    platformSpriteAnimations: SpriteAnimationsType
    constructor({backgroundStates,platformStates, src, ctx, platformWidth, platformHeight, platformSpriteHeight, platformSpriteWidth, width, height, position, renderSpeed, velocity, spriteHeight=400, spriteWidth=720}:StagePropsType){
        
        super({width, height, position, renderSpeed, velocity, spriteHeight, spriteWidth, ctx})
        this.platformSpriteHeight = platformSpriteHeight
        this.platformSpriteWidth = platformSpriteWidth
        this.platformWidth = platformWidth
        this.platformHeight = platformHeight
        this.src = src
        this.backgroundImage = new Image()
        this.backgroundImage.src = src.backgroundUrl
        this.platformImage = new Image()
        this.platformImage.src = src.platformUrl
        this.backgroundSpriteAnimations = buildSpriteAnimations({states: backgroundStates, spriteHeight, spriteWidth})
        this.platformSpriteAnimations = buildSpriteAnimations({states: platformStates, spriteHeight: platformSpriteHeight, spriteWidth: platformSpriteWidth})
        this.platformPosition = {
            x: this.width/2-platformWidth/2,
            y: this.height-platformHeight
        }
    }
    
    draw() {
        const currentBackgroundFrame = getStateFrame({spriteAnimation: this.backgroundSpriteAnimations['default'], renderSpeed: this.renderSpeed, frame: this.frame})
        const currentPlatformFrame = getStateFrame({spriteAnimation: this.platformSpriteAnimations['default'], renderSpeed: this.renderSpeed, frame: this.frame})
        this.ctx.drawImage(this.backgroundImage, currentBackgroundFrame.x, currentBackgroundFrame.y, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, this.width, this.height)
        this.ctx.drawImage(this.platformImage, currentPlatformFrame.x, currentPlatformFrame.y, this.spriteWidth, this.spriteHeight, this.platformPosition.x, this.platformPosition.y, this.width, this.height)

        this.frame++
    }
}