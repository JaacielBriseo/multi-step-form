import { NavLink } from 'react-router-dom';
import { Header, SubmitButton } from '../components';
import { headersData } from '../constants';
import { useAppSelector } from '../store/hookTypes';
export const Summary = () => {
	const { paymentType, addons, subscriptionPlan } = useAppSelector((state) => state.subscription);
	const { plan, price } = subscriptionPlan;
	const totalAddonsPrices = addons.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.price;
	}, 0);
	return (
		<section className='formLayout'>
			<Header text={headersData.summary.text} title={headersData.summary.title} />
			<div className='mt-5 divide-y divide-gray-500 bg-Magnolia p-3 rounded-md space-y-4'>
				<div className='flex justify-between items-center'>
					<div>
						<h4 className='font-medium'>
							{plan}({paymentType})
						</h4>
						<NavLink to={'/selectPlan'} className='underline text-CoolGray text-sm'>
							Change
						</NavLink>
					</div>
					<p>
						${price}
						{paymentType === 'monthly' ? '/mo' : '/yr'}
					</p>
				</div>
				<div>
					{addons.map(({ addon, price }) => (
						<div key={addon} className='flex justify-between items-center space-y-2 text-sm'>
							<p className='text-CoolGray'>{addon}</p>
							<p>
								+${price}
								{paymentType === 'monthly' ? '/mo' : '/yr'}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-between mx-4 mt-4'>
				<p className='text-CoolGray text-sm'>Total ({paymentType === 'monthly' ? 'per month' : 'per year'})</p>
				<p className='font-medium text-PurplishBlue'>
					${totalAddonsPrices + price}
					{paymentType === 'monthly' ? '/mo' : '/yr'}
				</p>
			</div>
			<SubmitButton text='Confirm' />
		</section>
	);
};
