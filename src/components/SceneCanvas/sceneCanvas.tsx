"use client"
import { useSceneCanvas } from "@/hooks/useSceneCanvas"

export const SceneCanvas = ()=>{
    const {sceneCanvasRef} =  useSceneCanvas()
    return <canvas ref={sceneCanvasRef} className="w-full h-[500px]" width={1280} height={500}></canvas>
}