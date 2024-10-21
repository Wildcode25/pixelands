export interface StateType{
    name: stateName
    frames: number
}

export type stateName = 'default' | 'fly' | 'dash' | 'bend' | 'jump' | 'drop' | 'cover' | 'hold' |'walk'|'airCover'
export interface ReactionType{
    walk: ()=>void,
}
export interface SpritePropsType{
    ctx: CanvasRenderingContext2D,
    renderSpeed?: number,
    velocity?: {
        x:number,
        y: number
    } 
    width?: number, 
    height?: number, 
    position?: {
        x:number,
        y: number
    }
    spriteWidth?: number
    spriteHeight?: number
}
export type SpriteAnimationsType = Record<string, SpriteAnimation>

export type SpriteAnimation = {
    loc: [{
        x: number,
        y: number
    }] | []
}