import { Field } from 'formik';
import { SwitchTogglerProps } from '../interfaces';

export const SwitchToggler = ({ setSelected, values }: SwitchTogglerProps) => {
	return (
		<label
			className='flex items-center justify-center space-x-3 bg-Magnolia h-9 rounded-md text-sm font-medium'
			onChange={() => setSelected(null)}
		>
			<p className={`${values.toggler ? 'text-CoolGray ' : ''}`}>Monthly</p>
			<Field type='checkbox' name='toggler' className='hidden' />
			<span className='toggle-switch inline-block bg-MarineBlue rounded-md cursor-pointer'>
				<span
					className='toggle-switch-slider bg-White rounded-md transition-colors duration-300 '
					style={{
						left: values.toggler ? '20px' : '0',
					}}
				/>
			</span>
			<p className={`${!values.toggler ? 'text-CoolGray' : ''}`}>Yearly</p>
		</label>
	);
};
