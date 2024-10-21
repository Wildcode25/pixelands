import { type StateType } from "@/lib/types"

export const GOKU_ANIMATION_STATES = [
    {
        name: 'default',
        frames: 4,
        
    },
    {
        name: 'bend',
        frames: 2
    },
    {
        name: 'walk',
        frames: 4
    },
    {
        name: 'fly',
        frames: 3,
        
    } 
 

] as StateType[]
export const NARUTO_ANIMATION_STATES = [
    {
        name: 'default',
        frames: 4,
       
    },
    {
        name: 'walk',
        frames: 8,
        
    } ,
    {
        name: 'jump',
        frames: 2
    },

    {
        name: 'dash',
        frames: 6
    }
 

] as StateType[]

export const ICHIGO_ANIMATION_STATES = [
    {
        name: 'default',
        frames: 8,
       
    },
    {
        name: 'walk',
        frames: 8,
        
    } ,
    {
        name: 'jump',
        frames: 2
    },

    {
        name: 'hold',
        frames: 1
    },
    {
        name: 'drop',
        frames: 2
    }
 

] as StateType[]
export const DEFAULT_RENDER_SPEED = 8
export const DEFAULT_POSITION = {
    x: 0,
    y: 0
}