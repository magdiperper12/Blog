'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoHome, IoMailUnreadSharp } from 'react-icons/io5';
import { FaSun, FaMoon, FaUser, FaBell } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import Dark from '../Dark-Mode/Dark-mode';

const Header: React.FC = () => {
	const [isDarkMode, toggleDarkMode] = Dark();
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMenu =
		(setter: React.Dispatch<React.SetStateAction<boolean>>) => () =>
			setter((prev) => !prev);

	const menuItems = [
		<BiWorld />,
		<FaUser />,
		<IoMailUnreadSharp />,
		<FaBell />,
	];

	const profileMenuItems = ['My profile', 'My data', 'Team settings'];

	return (
		<header
			className={`transition-colors ${
				isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-gray-900'
			}`}>
			<div className='mx-auto'>
				<div className='flex items-center justify-between p-4'>
					<div className='flex-1 flex items-center gap-6'>
						<a
							className={`text-lg md:text-xl flex items-center gap-3 p-2 rounded-md ${
								isDarkMode
									? 'bg-gray-900 text-gray-100'
									: 'bg-gray-300 text-gray-900'
							}`}
							href='#'>
							<IoHome className='text-xl' /> <span>Home</span>
						</a>
						<nav className='hidden md:block'>
							<ul className='flex items-center gap-6 text-sm'>
								{menuItems.map((item, index) => (
									<li key={index}>
										<a
											className={`transition hover:text-gray-500/75 dark:hover:text-white/75 ${
												isDarkMode ? 'text-white' : 'text-gray-500'
											}`}
											href='#'>
											{item}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>

					<div className='relative flex items-center gap-8'>
						<button
							onClick={toggleDarkMode}
							className='flex items-center justify-center w-12 h-12 rounded-full transition-colors bg-gray-300 dark:bg-gray-700 text-gray-100 hover:scale-105 shadow-md'>
							{isDarkMode ? (
								<FaSun className='text-yellow-500 text-3xl' />
							) : (
								<FaMoon className='text-blue-300 text-3xl' />
							)}
						</button>

						<button
							onClick={toggleMenu(setIsProfileMenuOpen)}
							className={`overflow-hidden rounded-full border shadow-inner ${
								isDarkMode ? 'border-gray-600' : 'border-gray-300'
							}`}>
							<Image
								src='/avatar2.png'
								alt='User Avatar'
								width={40}
								height={40}
								className='size-10 object-cover'
							/>
						</button>

						{isProfileMenuOpen && (
							<div
								className={`absolute right-0 z-10 mt-2 w-56 rounded-md border shadow-lg ${
									isDarkMode
										? 'dark:border-gray-800 dark:bg-gray-900'
										: 'border-gray-100 bg-white'
								}`}
								role='menu'>
								<div className='p-2'>
									{profileMenuItems.map((item) => (
										<a
											key={item}
											href='#'
											className={`block rounded-lg px-4 py-2 text-sm ${
												isDarkMode
													? 'dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
													: 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
											}`}
											role='menuitem'>
											{item}
										</a>
									))}
									<form
										method='POST'
										action='#'>
										<button
											type='submit'
											className={`flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm ${
												isDarkMode
													? 'dark:text-red-500 dark:hover:bg-red-600/10'
													: 'text-red-700 hover:bg-red-50'
											}`}
											role='menuitem'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												className='size-4'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
												/>
											</svg>
											Logout
										</button>
									</form>
								</div>
							</div>
						)}

						<div className='md:hidden'>
							<button
								className={`${
									isDarkMode
										? 'dark:bg-gray-800 dark:text-white'
										: 'bg-gray-100 text-gray-600'
								} rounded-sm p-2 transition hover:text-gray-600/75 dark:hover:text-white/75`}
								onClick={toggleMenu(setIsMobileMenuOpen)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='size-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</button>

							{isMobileMenuOpen && (
								<div
									className={`fixed inset-0 bg-gray-700 text-gray-100 bg-opacity-50 transition-opacity ${
										isDarkMode ? 'dark:bg-gray-900' : 'bg-white'
									}`}>
									<div className='w-60 p-5'>
										{[
											'About',
											'Careers',
											'History',
											'Services',
											'Projects',
											'Blog',
										].map((item) => (
											<a
												key={item}
												href='#'
												className={`${
													isDarkMode ? 'dark:text-white' : 'text-gray-800'
												} block py-2`}>
												{item}
											</a>
										))}
									</div>
									<div>Close</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
