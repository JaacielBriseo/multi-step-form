import { BrowserRouter, Route, Navigate, NavLink, Routes } from 'react-router-dom';
import { Addons, SelectPlan, Summary, UserInfoForm } from '../views';

export const Navigation = () => (
	<>
		<BrowserRouter>
			<div className='flex bg-Magnolia px-5 h-screen'>
				<nav className='p-10 bg-deskSide bg-no-repeat bg-cover mr-4 text-center w-96'>
					<ul>
						<li className='mb-3'>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? 'transition-all duration-300 ease-out text-red-800' : '')}
							>
								Form
							</NavLink>
						</li>
						<li className='mb-3'>
							<NavLink
								to='/select'
								className={({ isActive }) => (isActive ? 'transition-all duration-300 ease-out text-red-800' : '')}
							>
								Select
							</NavLink>
						</li>
						<li className='mb-3'>
							<NavLink
								to='/addons'
								className={({ isActive }) => (isActive ? 'transition-all duration-300 ease-out text-red-800' : '')}
							>
								Addons
							</NavLink>
						</li>
						<li className='mb-3'>
							<NavLink
								to='/summary'
								className={({ isActive }) => (isActive ? 'transition-all duration-300 ease-out text-red-800' : '')}
							>
								Summary
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='/' element={<UserInfoForm />} />
					<Route path='select' element={<SelectPlan />} />
					<Route path='addons' element={<Addons />} />
					<Route path='summary' element={<Summary />} />

					<Route path='/*' element={<Navigate to='/' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	</>
);
