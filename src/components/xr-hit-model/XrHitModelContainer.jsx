import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "./XrHitModel";
import Model from "./Model";

const XrHitModelContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrHitModel />
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitModelContainer;
