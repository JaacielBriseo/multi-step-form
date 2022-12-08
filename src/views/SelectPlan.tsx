import { useSelectPlan, Option } from '../hooks/useSelectPlan';
import { planOptions } from '../constants/planOptions';
import { BillingToggler } from '../components/BillingToggler';
import { useNavigate } from 'react-router-dom';

export const SelectPlan = () => {
	const navigate = useNavigate()
	const { handleClick, isSelected, activeStyle, setEnabled, enabled, setIsSelected } = useSelectPlan();
	return (
		<div className='w-11/12 mx-auto bg-White p-3 rounded-lg shadow-lg'>
			<div className='text-MarineBlue space-y-4 mb-3'>
				<h1 className='text-2xl font-bold'>Select your plan</h1>
				<p className='text-sm text-CoolGray'>You have the option of monthly or yearly billing</p>
			</div>
			<div className='space-y-3 mb-5'>
				{planOptions.map((option: Option, index: number) => (
					<button
						onClick={() => handleClick(index, option)}
						className={`flex space-x-3 items-center h-20 w-full rounded-md border px-2 ${
							index === isSelected && activeStyle
						}`}
					>
						<img src={option.icon} alt={option.plan} />
						<div className='flex flex-col text-start'>
							<h2 className='font-medium'>{option.plan}</h2>
							<small className='text-xs text-CoolGray'>
								${!enabled ? option.price.monthly : option.price.yearly}
								{!enabled ? '/mo' : '/yr'}
							</small>
							<small className='text-xs text-MarineBlue'>{enabled && '2 months free'}</small>
						</div>
					</button>
				))}
			</div>
			<BillingToggler enabled={enabled} setEnabled={setEnabled} setIsSelected={setIsSelected} />
			<button onClick={() => navigate(-1)} className='absolute bottom-5 left-2 text-CoolGray text-xs'>
				Go back
			</button>
			<button onClick={() => navigate('/addons')} className='absolute bottom-5 right-2 bg-MarineBlue text-White px-4 h-8 rounded-sm'>
				Next Step
			</button>
		</div>
	);
};
