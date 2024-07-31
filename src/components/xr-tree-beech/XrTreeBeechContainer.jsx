import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useGLTF, useAnimations } from "@react-three/drei";
import Model from "./Model";
import XrHitModel from "./XrHitModel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import modelsData from '../../data/models.json'

export default function XrTreeBeechContainer() {
  const { id } = useParams()
  const [model, setModel] = useState(null);

  useEffect(() => {
    if(!id) return;
    setModel(modelsData.find(model => model.id == id))
    // console.log('data', data);
  }, [id]);
  return (
    <>
      {!model ?
        <div>Loading...</div> :
        <>
          <ARButton
            sessionInit={{
              requiredFeatures: ["hit-test"],
            }}
          />
          <div className="py-[20px] text-center font-bold text-[32px]">{model.name}</div>
          <Canvas>
            <XR>
              <XrHitModel modelURL={model.modelURL}/>
            </XR>
          </Canvas>
        </>
      }
    </>
  );
}

const styles = {
  'height': '100vh',
  'width': '100vw',
}