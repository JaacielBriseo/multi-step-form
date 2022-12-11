import { Field } from 'formik';
import { useAddons } from '../hooks/useAddons';
import { Addon, AddonOptionProps } from '../interfaces';

export const AddonOption = ({ option, values, setFieldValue }: AddonOptionProps) => {
	const { handleChange, paymentType } = useAddons();
	let activeClass = 'border-MarineBlue bg-Magnolia';

	return (
		<label
			key={option.addon}
			className={`flex items-center justify-between border p-2 rounded-md md:h-28 md:w-7/12 md:text-lg ${
				values.addons.find((add: Addon) => add.addon === option.addon) !== undefined ? activeClass : ''
			}`}
		>
			<Field
				type='checkbox'
				name='options'
				value={option.addon}
				onChange={() => {
					handleChange(values, option, setFieldValue);
				}}
				checked={values.addons.find((add: Addon) => add.addon === option.addon) !== undefined}
			/>
			<div className='flex flex-col'>
				<p className='text-MarineBlue font-medium'>{option.addon}</p>
				<small className='text-CoolGray mb-1'>{option.msg}</small>
			</div>
			<small className='text-PastelBlue font-medium'>
				+${paymentType === 'monthly' ? `${option.price.monthly}/mo` : `${option.price.yearly}/yr`}
			</small>
		</label>
	);
};
