import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import { WidgetBar } from './components/WidgetBar/WidgetBar';
import { CanvasBlock } from './components/CanvasBlock/CanvasBlock';

const App = () => {
	const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0)');

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const maxScroll = 350; // Максимальная высота скролла для полного затемнения
		const opacity = Math.min(scrollTop / maxScroll, 1); // Ограничиваем значение до 1

		// Используем requestAnimationFrame для плавного обновления
		requestAnimationFrame(() => {
			setBgColor(`rgba(0, 0, 0, ${opacity})`);
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className={styles.main}>
				<div className={styles.container}>
					<CanvasBlock />
					<div className={styles.overlayElement} style={{ background: bgColor }}></div>
				</div>
				<WidgetBar />
			</div>
			<div className={styles.block2}></div>
		</>
	);
};

export default App;
