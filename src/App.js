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

	document.addEventListener('aos:in', ({ detail }) => {
		console.log('animated in', detail);
	});

	return (
		<>
			<div className={styles.container}>
				<CanvasBlock />
				<div className={styles.overlayElement} style={{ background: bgColor }}></div>
				<div className={styles.widgetBlock}>
					<WidgetBar />
				</div>
			</div>
			<div className={styles.block2}>
				<div>page in progress, please comeback later</div>
			</div>
		</>
	);
};

export default App;
