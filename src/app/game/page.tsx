"use client"
import { useSceneCanvas } from "@/hooks/useSceneCanvas"

export default function GamePage(){
    const {sceneCanvasRef} = useSceneCanvas()
    return <main className="w-screen h-screen flex justify-center items-center">  
        <canvas className="h-[720px] w-[1280px]" ref={sceneCanvasRef} width={1280} height={720}></canvas>
    </main>
}