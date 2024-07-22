import React, { useRef, useEffect, Suspense} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import {AnimatedModel} from './Animatedmodel';

const Model = ({ url }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  const modelRef  = useRef();
  useFrame((state, delta)=>{
    modelRef.current.rotation.y +=delta/4;
    modelRef.current.rotation.x -=delta/2;
  })

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return (
    <mesh ref = {modelRef}>
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group></mesh>
  );
};

const App = () => {
  return (
    <Canvas
       camera={{ position: [2, 0, 12.25], fov: 15 }}
       style={{
        backgroundColor: '#111a21',
        width: '1000px',
        height: '1000px',
     }}
       >
<Suspense>
         <ambientLight intensity={1} />
         <ambientLight intensity={0.25} />
         <directionalLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} />
    
 <Model url ='/3dmodel-test/models/finalmodel.glb'/>
     { /*<AnimatedModel />*/}
      <OrbitControls />
      </Suspense>
    </Canvas>


  );
};

export default App;