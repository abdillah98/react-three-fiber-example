
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model({modelURL, ...props}) {
  console.log('modelURL',modelURL);
  const { scene } = useGLTF(modelURL)
  // const gltf = useLoader(GLTFLoader, modelURL)
  return (
    <>
      <group scale={0.7}>
        <Suspense fallback={null}>
          <primitive object={scene} {...props} />
        </Suspense>
      </group>
    </>
  )
}


