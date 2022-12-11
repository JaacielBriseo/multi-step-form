import { HeaderProps } from '../interfaces';

export const Header = ({ title, text }: HeaderProps) => {
	return (
		<div className='space-y-2 mb-4'>
			<h1 className='text-2xl font-bold md:text-4xl'>{title}</h1>
			<p className='text-CoolGray text-sm md:text-lg'>{text}</p>
		</div>
	);
};
