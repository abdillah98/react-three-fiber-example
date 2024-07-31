
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Model = (props) => {
//   const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/delivery-truck/model.gltf')
//   return (
//     <>
//       {/* <Suspense fallback={null}> */}
//         <OrbitControls />
//         <ambientLight />
//         <group scale={1.2}>
//           <primitive object={scene} {...props} />
//         </group>
//       {/* </Suspense> */}
//     </>
//   )
  
// };

// export default Model;



export default function Model({modelURL, ...props}) {
  console.log('modelURL',modelURL);
  const { scene } = useGLTF(modelURL)
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


