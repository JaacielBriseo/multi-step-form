export const SubmitButton = ({ text ,customClass = '' }: { text: string , customClass?:string }) => {
	return (
		<div className='flex justify-end mt-20 md:mr-80'>
			<button
				type='submit'
				className={`w-24 h-9 p-1 bg-MarineBlue text-White rounded-md md:w-28 md:h-12 ${customClass}`}
			>
				{text}
			</button>
		</div>
	);
};
