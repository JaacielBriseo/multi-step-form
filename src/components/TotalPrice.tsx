import { TotalPriceProps } from '../interfaces';

export const TotalPrice = ({ paymentType, totalAddonsPrices, price }: TotalPriceProps) => {
	return (
		<div className='flex justify-between mx-4 mt-4'>
			<p className='text-CoolGray text-sm'>Total ({paymentType === 'monthly' ? 'per month' : 'per year'})</p>
			<p className='font-medium text-PurplishBlue'>
				${totalAddonsPrices + price}
				{paymentType === 'monthly' ? '/mo' : '/yr'}
			</p>
		</div>
	);
};
