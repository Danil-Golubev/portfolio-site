import React from 'react';
import styles from './styles.module.css';
export const WidgetBar = () => {
	return (
		<>
			<div className={styles.mainBlock}>
				<div className={styles.contentBlock}>
					<div className={styles.title}>Danil Golubev</div>
					<div className={styles.title}>Frontend software developer</div>
					<div className={styles.title}>@ownantwerp</div>
				</div>
			</div>
		</>
	);
};
