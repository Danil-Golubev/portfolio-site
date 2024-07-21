import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import {AnimatedModel} from './Animatedmodel';

const Model = ({ url }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
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

         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} />
 <Model url ='/models/animatedmodel.glb'/>
     { /*<AnimatedModel />*/}
      <OrbitControls />
    </Canvas>


  );
};

export default App;