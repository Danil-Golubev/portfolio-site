import React from 'react';
import style from './TitleSecond.module.css';

export const TitleSecond = ({ text }) => {
	return (
		<div className={style.textBlock}>
			<div className={style.p1}>{text}</div>
		</div>
	);
};
