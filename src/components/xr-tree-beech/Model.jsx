
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model({modelURL, ...props}) {
  console.log('modelURL',modelURL);
  const { scene } = useGLTF(modelURL)
  // const data = useGLTF(modelURL)
  // console.log('data', data);

  // const data2 = useLoader(OBJLoader, "/models/nachtlagerungsorthese.obj");
  // console.log('data2', data2);
  // const gltf = useLoader(GLTFLoader, modelURL)
  
  return (
    <>
      <group scale={0.7}>
        <Suspense fallback={null}>
          <primitive object={scene} {...props} />
          {/* <primitive object={data2} {...props} /> */}
        </Suspense>
      </group>
    </>
  )
}


