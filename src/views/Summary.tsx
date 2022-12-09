import { useAppSelector } from '../store/hookTypes';
export const Summary = () => {
	const { paymentType, addons, subscriptionPlan } = useAppSelector((state) => state.subscription);
	return (
		<div className='text-MarineBlue w-11/12 mx-auto bg-White rounded-md mt-4 shadow-lg p-3 flex flex-col'>
			<div className='w-[85%]'>
				<h1 className='text-2xl'>Finishing up</h1>
				<p className='text-CoolGray text-sm'>Double-check everything looks OK before confirming.</p>
			</div>
			<div className='mt-5 divide-y divide-gray-500'>
				<div>
					<h4>{subscriptionPlan!.plan}({paymentType}){subscriptionPlan!.price}</h4>
				</div>
				<div className='divide-y flex flex-col'>
					{Object.entries(addons).map(([key, value]) => (
						<div key={key}>
							{value.addon}
							{value.price}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
//TODO:Design & Thank You message
