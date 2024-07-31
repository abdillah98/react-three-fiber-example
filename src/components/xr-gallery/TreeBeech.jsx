import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../../contexts/CharacterAnimations";
import { Mesh } from "three";

export default function TreeBeech(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/tree-beech.gltf");
  const { actions, names } = useAnimations(animations, group);

  const { setAnimations, animationIndex, Color } = useCharacterAnimations();

  useEffect(() => {
    setAnimations(names);
  }, []);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();

    return () => {
      actions[names[animationIndex]]?.fadeOut(0.5);
    };
  }, [animationIndex]);
  console.log('nodes', nodes);
  return ( 
    <group ref={group} {...props} dispose={null}>
      <group scale={1.91}>
        <primitive object={nodes.root} />
        <Mesh
          geometry={nodes.Scene.geometry}
          material={materials.color_main}
          skeleton={nodes.Scene.skeleton}
          material-color={Color}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/tree-beech.gltf");

// import { useLoader } from "@react-three/fiber";
// import { Suspense } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Model = ({ position }) => {
//   const gltf = useLoader(GLTFLoader, "/models/druid.gltf");
//   return (
//     <Suspense fallback={null}>
//       <primitive position={position} object={gltf.scene} />
//     </Suspense>
//   );
// };

// export default Model;
