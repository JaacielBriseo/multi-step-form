import { SelectedAddonsProps } from '../interfaces';

export const SelectedAddons = ({ addon, paymentType, price }: SelectedAddonsProps) => {
	return (
		<div key={addon} className='flex justify-between items-center space-y-2 text-sm'>
			<p className='text-CoolGray'>{addon}</p>
			<p>
				+${price}
				{paymentType === 'monthly' ? '/mo' : '/yr'}
			</p>
		</div>
	);
};
