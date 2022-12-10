import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/hookTypes';
export const Summary = () => {
	const { paymentType, addons, subscriptionPlan } = useAppSelector((state) => state.subscription);
	const totalAddonsPrices = addons.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.price;
	}, 0);
	return (
		<div className='formLayout'>
			<div className='w-[85%]'>
				<h1 className='text-2xl font-semibold'>Finishing up</h1>
				<p className='text-CoolGray text-sm'>Double-check everything looks OK before confirming.</p>
			</div>
			<div className='mt-5 divide-y divide-gray-500 bg-Magnolia p-3 rounded-md space-y-4'>
				<div className='flex justify-between items-center'>
					<div>
						<h4 className='font-medium'>
							{subscriptionPlan.plan}({paymentType})
						</h4>
						<NavLink to={'/selectPlan'} className='underline text-CoolGray text-sm'>
							Change
						</NavLink>
					</div>
					<p>
						${subscriptionPlan.price}
						{paymentType === 'monthly' ? '/mo' : '/yr'}
					</p>
				</div>
				<div>
					{addons.map((addon) => (
						<div key={addon.addon} className='flex justify-between items-center space-y-2 text-sm'>
							<p className='text-CoolGray'>{addon.addon}</p>
							<p>
								+${addon.price}
								{paymentType === 'monthly' ? '/mo' : '/yr'}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-between mx-4 mt-4'>
				<p className='text-CoolGray text-sm'>Total ({paymentType === 'monthly' ? 'per month' : 'per year'})</p>
				<p className='font-medium text-PurplishBlue'>
					${totalAddonsPrices + subscriptionPlan.price}
					{paymentType === 'monthly' ? '/mo' : '/yr'}
				</p>
			</div>
		</div>
	);
};
//TODO:Design & Thank You message
