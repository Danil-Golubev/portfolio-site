import React from 'react';
import styles from './widgetBar.module.css';
import { TitleMain } from '../TypedTexts/titleMain/TitleMain';
import { TitleSecond } from '../TypedTexts/titleSecond/TitleSecond';

export const WidgetBar = () => {
	const [animate, setAnimate] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);

	const handleScroll = () => {
		if (window.scrollY > 200) {
			// если прокрутили больше 50px
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	React.useEffect(() => {
		// Запуск анимации через 4 секунды после рендера
		const timer = setTimeout(() => {
			setAnimate(true);
		}, 3000);

		// Убираем таймер при размонтировании компонента
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className={isScrolled ? `${styles.widgetBar} ${styles.scrolled}` : styles.widgetBar}>
				<div className={styles.widgetContent}>
					<div className={styles.infoBlock}>
						<div className={styles.titlesBlock}>
							<div className={styles.oneTitleBlock}>
								<TitleMain text={'Hi, me is Danil'} />{' '}
							</div>
							<div className={styles.oneTitleBlock}>
								{animate ? <TitleSecond text={'and that tab is your guider, just keep it scrolling...$*&$('} /> : <></>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
