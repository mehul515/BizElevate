"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../../utils/cn";

// Define the GlobeRenderState interface for better type safety
interface GlobeRenderState {
  phi: number;
  width: number;
  height: number;
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1, // Increases the overall darkness
  diffuse: 0.6, // Adjusts lighting for depth
  mapSamples: 16000,
  mapBrightness: 1.5, // Reduces brightness to match dark blue theme
  baseColor: [0.1, 0.2, 0.5], // Dark Blue
  markerColor: [0.2, 0.5, 1], // Orange markers
  glowColor: [0.2, 0.3, 0.7], // Soft Blue Glow
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  
  let phi = 0;
  
 let width = 0;
  
 const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
 const pointerInteracting = useRef<number | null>(null);
  
 const pointerInteractionMovement = useRef<number>(0);
  
 const [r, setR] = useState<number>(0);

  
 const updatePointerInteraction = (value: number | null): void => {
   pointerInteracting.current = value;
   if (canvasRef.current) {
     canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
   }
 };

  
 const updateMovement = (clientX: number): void => {
   if (pointerInteracting.current !== null) {
     const delta = clientX - pointerInteracting.current;
     pointerInteractionMovement.current = delta;
     setR(delta / 200);
   }
 };

  
 const onRender = useCallback(
   (state: Record<string, any>) => {
     // Cast state to GlobeRenderState type inside the function
     const renderState = state as GlobeRenderState;

     if (!pointerInteracting.current) phi += 0.005;
     renderState.phi = phi + r;
     renderState.width = width * 2;
     renderState.height = width * 2;
   },
   [r]
 );

  
 const onResize = (): void => {
   if (canvasRef.current) {
     width = canvasRef.current.offsetWidth;
   }
 };

  
 useEffect(() => {
   window.addEventListener("resize", onResize);
   onResize();

   const globe = createGlobe(canvasRef.current!, {
     ...config,
     width: width * 2,
     height: width * 2,
     onRender,
   });

   setTimeout(() => (canvasRef.current!.style.opacity = "1"));
   return () => globe.destroy();
 }, [config, onRender]);

  
 return (
   <div
     className={cn(
       "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
       className
     )}
   >
     <canvas
       className={cn(
         "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
       )}
       ref={canvasRef}
       onPointerDown={(e) =>
         updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
       }
       onPointerUp={() => updatePointerInteraction(null)}
       onPointerOut={() => updatePointerInteraction(null)}
       onMouseMove={(e) => updateMovement(e.clientX)}
       onTouchMove={(e) =>
         e.touches[0] && updateMovement(e.touches[0].clientX)
       }
     />
   </div>
 );
}
