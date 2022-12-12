import { NavLink } from 'react-router-dom';
import { NavElementsProps } from '../interfaces';

export const NavElements = ({ stepNumber, stepText, stepTitle, path }: NavElementsProps) => {
	let activeStyle = {
		transition: 'all 0.3s ease-out',
		backgroundColor: 'hsl(206, 94%, 87%)',
		color: 'black',
	};
	return (
		<li className='md:flex'>
			<NavLink
				onClick={(e) => e.preventDefault()}
				to={path}
				className='navItem'
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
			>
				{stepNumber}
			</NavLink>
			<div className='hidden md:block md:ml-3 md:mb-1'>
				<small className='font-thin'>{stepText}</small>
				<h5 className='uppercase'>{stepTitle}</h5>
			</div>
		</li>
	);
};
