import { BrowserRouter, Route, Navigate, NavLink, Routes } from 'react-router-dom';
import { Addons, SelectPlan, Summary, UserInfoForm } from '../views';

export const Navigation = () => {
	let activeStyle = {
		transition: 'all 0.3s ease-out',
		backgroundColor: 'hsl(206, 94%, 87%)',
		color: 'black',
	};
	return (
		<>
			<BrowserRouter>
				<div className='bg-mobSide bg-no-repeat bg-cover h-40 font-Ubuntu'>
					<nav>
						<ul className='flex justify-center items-center h-20 text-White font-semibold text-sm'>
							<li>
								<NavLink
									// onClick={(e) => e.preventDefault()}
									to='/'
									className='box-border border-LightGray rounded-full px-2 pb-1 m-1 border'
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									1
								</NavLink>
							</li>
							<li>
								<NavLink
									// onClick={(e) => e.preventDefault()}
									to='/selectPlan'
									className='box-border border-LightGray rounded-full px-2 pb-1 m-1 border'
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									2
								</NavLink>
							</li>
							<li>
								<NavLink
									// onClick={(e) => e.preventDefault()}
									to='/addons'
									className='box-border border-LightGray rounded-full px-2 pb-1 m-1 border'
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									3
								</NavLink>
							</li>
							<li>
								<NavLink
									// onClick={(e) => e.preventDefault()}
									to='/summary'
									className='box-border border-LightGray rounded-full px-2 pb-1 m-1 border'
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									4
								</NavLink>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path='/' element={<UserInfoForm />} />
						<Route path='selectPlan' element={<SelectPlan />} />
						<Route path='addons' element={<Addons />} />
						<Route path='summary' element={<Summary />} />

						<Route path='/*' element={<Navigate to='/' replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
