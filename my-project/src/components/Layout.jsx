import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../src/global/Sidebar'
import NavBarMobile from '../../src/global/NavBarMobile'

export default function Layout() {
	return (
		<div>
			<NavBarMobile />
			<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
				<SideBar />
				<div className="flex flex-col flex-1">
					<div className="flex-1 p-4 min-h-0 overflow-auto">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	)
}
