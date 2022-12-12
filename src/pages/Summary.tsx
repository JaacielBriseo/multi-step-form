import { useNavigate } from 'react-router-dom';
import { useSummary } from '../hooks';
import { Header, SelectedAddons, SubmitButton, SelectedPlan, TotalPrice } from '../components';

export const Summary = () => {
	const navigate = useNavigate();
	const { plan, paymentType, totalAddonsPrices, price, addons, headersData } = useSummary();
	return (
		<form className='formLayout md:text-xl' onSubmit={() => navigate('/thanks')}>
			<Header text={headersData.summary.text} title={headersData.summary.title} />
			<div className='mt-5 divide-y divide-gray-500 bg-Magnolia p-3 rounded-md space-y-4 md:w-7/12'>
				<SelectedPlan paymentType={paymentType} plan={plan} price={price} />
				<div>
					{addons.map(({ addon, price }) => (
						<SelectedAddons addon={addon} paymentType={paymentType} price={price} key={addon} />
					))}
				</div>
			</div>
			<TotalPrice paymentType={paymentType} price={price} totalAddonsPrices={totalAddonsPrices} />
			<SubmitButton text='Confirm' customClass='md:bg-PurplishBlue md:mr-20' />
		</form>
	);
};
//TODO: DESKTOP DESIGN