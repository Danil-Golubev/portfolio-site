import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ModelRender } from './components/modelRender';
import styles from './app.module.css';

const App = () => {
	return (
		<>
			<div id='block' className={styles.block}>
				<Canvas
					camera={{ position: [0, 0, -1.4] }}
					style={{
						backgroundColor: 'black',
						width: '100%',
						height: '100%',
						justifyContent: 'center',
					}}
				>
					<Suspense>
						<ambientLight intensity={1} />
						<ambientLight intensity={0.25} />
						<directionalLight intensity={0.2} />
						<pointLight position={[10, 10, 10]} />
						<ModelRender url='/3dmodel-test/models/finalmodel.glb' />
						{/*<AnimatedModel />*/}
					</Suspense>
				</Canvas>
			</div>
			<div className={styles.block2}>
				<div className={styles.card}></div>
			</div>
		</>
	);
};

export default App;
