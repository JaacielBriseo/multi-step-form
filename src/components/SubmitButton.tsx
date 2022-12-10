export const SubmitButton = ({ text }: { text: string }) => {
	return (
		<div className='flex justify-end mt-20'>
			<button type='submit' className='w-24 h-9 p-1 bg-MarineBlue text-White rounded-md '>
				{text}
			</button>
		</div>
	);
};
