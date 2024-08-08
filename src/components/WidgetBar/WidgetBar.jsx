import styles from './styles.module.css';

export const WidgetBar = () => {
	return (
		<>
			<div className={styles.widgetBar}>
				<div className={styles.widgetContent}>
					<div className={styles.titlesBlock}>
						<h2 className={styles.fontWidget}>Hi, my name is Danil</h2>
						<p className={styles.fontWidget}> and that tab is your guider, just keep it scrolling</p>
					</div>
				</div>
			</div>
		</>
	);
};
