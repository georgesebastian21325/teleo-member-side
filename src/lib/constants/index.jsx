import {
	HiOutlineViewGrid,
	HiOutlineLogout

} from 'react-icons/hi'

import { TbBible } from "react-icons/tb";
import { MdOutlineEvent } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'DASHBOARD',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'create-event',
		label: 'CREATE EVENT',
		path: '/create-event',
		icon: <MdOutlineEvent />
	},
	{
		key: 'online-discipleship',
		label: 'ONLINE DISCIPLESHIP',
		path: '/online-discipleship',
		icon: <TbBible />
	},
	{
		key: 'manage-account',
		label: 'MANAGE ACCOUNT',
		path: '/manage-account',
		icon: <MdOutlineManageAccounts />
	},
	{
		key:'sign-out',
		label: 'SIGN OUT',
		path: '/sign-out',
		icon: <HiOutlineLogout className='text-red-600'/>
	}
]
