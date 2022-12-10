import { ThankYou } from '../assets/index';
export const ThankYouCard = () => {
	return (
		<div className='formLayout h-96 flex items-center'>
			<div className='w-11/12 mx-auto space-y-4'>
				<img src={ThankYou} alt='thanksCard' className='mx-auto w-14' />
				<h1 className='text-2xl font-bold text-center'>Thank You!</h1>
				<p className='text-center text-CoolGray text-sm'>
					Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
					please feel free to email us at support@loremgaming.com.
				</p>
			</div>
		</div>
	);
};
