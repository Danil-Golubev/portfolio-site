import React from 'react';
import style from './TitleMain.module.css';

export const TitleMain = ({ text }) => {
	return (
		<div className={style.textBlock}>
			<p className={style.p1}>{text}</p>
		</div>
	);
};
