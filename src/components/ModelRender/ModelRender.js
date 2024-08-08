import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Box3, Vector3, Group } from 'three';

export const ModelRender = ({ url }) => {
	const group = useRef();
	const { scene, animations } = useGLTF(url);
	const { actions } = useAnimations(animations, group);

	const modelRef = useRef();
	const pivotRef = useRef(new Group());

	useEffect(() => {
		const model = modelRef.current;
		if (model) {
			const box = new Box3().setFromObject(model);
			const center = new Vector3();
			box.getCenter(center);
			model.position.sub(center); // Center the model at (0, 0, 0)
			pivotRef.current.add(model); // Add the model to the pivot group
		}
	}, [scene]);

	useFrame((state, delta) => {
		if (pivotRef.current) {
			pivotRef.current.rotation.y += delta; // Rotate the pivot group around the y-axis
			// Uncomment the next line if you want to rotate around the x-axis as well
			pivotRef.current.rotation.x -= delta / 2;
			pivotRef.current.rotation.z += delta / 6;
		}
	});

	useEffect(() => {
		if (actions && Object.keys(actions).length > 0) {
			actions[Object.keys(actions)[0]].play(); // Play the first animation
		}
	}, [actions]);

	return (
		<mesh position={[0, 0, 0]}>
			<group ref={group}>
				<group ref={pivotRef}>
					<primitive ref={modelRef} object={scene} />
				</group>
			</group>
		</mesh>
	);
};
