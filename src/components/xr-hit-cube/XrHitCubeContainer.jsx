import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitCube from "./XrHitCube";

const XrHitCubeContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
          optionalFeatures: [
            'local-floor', 
            'bounded-floor', 
            'hand-tracking', 
            'layers', 
            'dom-overlay'
          ] 
        }}
      />
      <Canvas>
        <XR>
          <XrHitCube />
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitCubeContainer;
