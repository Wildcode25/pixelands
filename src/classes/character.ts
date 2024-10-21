import { SpriteAnimationsType, StateType, type SpritePropsType} from "@/lib/types";
import { Sprite } from "./sprite";
import { buildSpriteAnimations, getStateFrame } from "@/lib/utils";
interface CharacterPropsType extends SpritePropsType{
    stock?: number,
    resistance: number,
    weight: number,
    attackSpeed: number,
    jumpSpeed: number,
    damage: number,
    porcentage?: number,
    direction?: string,
    src: {
        characterUrl: string,
        attackUrl?: string
    }
    characterStates: StateType[]
    attackStates?: StateType[]
    spriteHeight: number
    spriteWidth: number
}
export class Character extends Sprite{
    stock?: number
    resistance: number
    weight: number
    attackSpeed: number
    porcentage?: number
    jumpSpeed: number
    damage: number
    direction?: string
    characterState: string
    characterSpriteAnimarions: SpriteAnimationsType
    characterImage: HTMLImageElement
    src: {
        characterUrl: string,
        attackUrl?: string
    }
    constructor({
        ctx,
        width, 
        height, 
        direction='right', 
        src, 
        characterStates,
        position, 
        stock, 
        resistance, 
        weight, 
        attackSpeed, 
        porcentage=0,  
        damage,
        spriteHeight=100,
        spriteWidth=100,
        velocity
        
    }:CharacterPropsType){
        super({position, width, height, ctx, velocity})
        this.stock = stock
        this.attackSpeed = attackSpeed
        this.damage = damage
        this.jumpSpeed = 5
        this.resistance = resistance
        this.porcentage = porcentage
        this.weight = weight
        this.direction = direction
        this.characterState = 'default'
        this.characterSpriteAnimarions = buildSpriteAnimations({states: characterStates, spriteHeight, spriteWidth})
        this.characterImage = new Image()
        this.characterImage.src = src.characterUrl
        this.src = src
    }
    walk(){    
        
        this.characterState = 'walk'
    }
    dash(){
        this.characterState = 'dash'
    }
    jump(){
        if(!this.isInTheAir)
        this.characterState = 'jump'
    }
    
    cover(){
        // if(this.isInTheAir) return this.characterState = 'airCover'

        this.characterState = 'cover'
    }
    get isInTheAir(){
        return this.position.y+this.height<=460+this.height
    }
    update(){
        
          if(this.characterState==='walk'&&!this.isInTheAir){
            if(this.direction=='left'){
                this.characterImage.src = '/sprites/naruto/investedSheet.png'
                this.position.x-=1
            }else{
                this.position.x+=1
                this.characterImage.src = this.src.characterUrl

            }
          }
           if(this.characterState==='jump'){
            if(this.velocity.y<=0) {
                this.characterState = 'default'
            }
            else{
                this.position.y-=this.velocity.y
                this.velocity.y=this.velocity.y-0.05
            }
           }
            else if(this.isInTheAir&&this.characterState!='jump'){
            console.log(this.velocity.y)
                this.position.y+=this.velocity.y
                this.velocity.y+=0.1
           }else{
            this.velocity.y=5
           }
            
        
        
    }
    draw(){
        const currentFrame = getStateFrame({spriteAnimation: this.characterSpriteAnimarions[this.characterState], renderSpeed: this.renderSpeed, frame: this.frame})
        this.ctx.drawImage(this.characterImage, currentFrame.x, currentFrame.y, this.spriteWidth, this.spriteHeight,this.position.x, this.position.y, this.width, this.height)
        this.frame++
    }


}