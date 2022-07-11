import { Fragment } from 'react';

import classes from './Header.module.css';
import foodImage from '../../assets/foodImage.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Foodle</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={foodImage} alt="A table full of delicious food." />
			</div>
		</Fragment>
	);
};

export default Header;
