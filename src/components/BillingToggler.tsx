import { useEffect } from 'react';
import { setPaymentType } from '../store';
import { useAppDispatch } from '../store/hookTypes';
interface TogglerProps {
	enabled: boolean;
	setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BillingToggler = ({ enabled, setEnabled }: TogglerProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		!enabled ? dispatch(setPaymentType('monthly')) : dispatch(setPaymentType('yearly'));
	}, [enabled]);
	return (
		<div className='flex justify-center space-x-2 bg-Magnolia h-11 items-center rounded-md'>
			<span className='ml-2 text-sm font-medium text-gray-900'>Monthly</span>

			<label className='inline-flex relative items-center mr-5 cursor-pointer'>
				<input type='checkbox' className='sr-only peer' checked={enabled} readOnly />
				<div
					onClick={() => {
						setEnabled(!enabled);
					}}
					className="w-11 h-6 bg-MarineBlue rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
				></div>
				<span className='ml-2 text-gray-900'>Yearly</span>
			</label>
		</div>
	);
};
