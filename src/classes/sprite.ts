import { DEFAULT_RENDER_SPEED, DEFAULT_POSITION } from "@/constants"
import {  SpritePropsType } from "@/lib/types"

export class Sprite {
    position: {
        x: number,
        y: number
    }
    ctx: CanvasRenderingContext2D
    renderSpeed: number
    frame: number
    width: number
    height: number
    spriteHeight: number
    spriteWidth: number
    velocity: {
        x: number,
        y: number
    }
    constructor({
        ctx,
        velocity={
            x: 5,
            y: 5
        },
        spriteHeight=100,
        spriteWidth=100, 
        width, 
        height,  
        renderSpeed=DEFAULT_RENDER_SPEED, 
        position=DEFAULT_POSITION }:SpritePropsType ) {
        this.renderSpeed = renderSpeed
        this.velocity = velocity
        this.frame = 0
        this.height = height  || spriteWidth
        this.width = width || spriteHeight*2.5
        this.spriteHeight = spriteHeight
        this.spriteWidth = spriteWidth
        this.position = position
        this.ctx = ctx
    }
    
}