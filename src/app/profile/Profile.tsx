import Image from 'next/image';
import React from 'react';

function Profile() {
	return (
		<div className='min-h-screen bg-gray-100 p-4'>
			<div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden'>
				<div className='grid grid-cols-1 md:grid-cols-3'>
					<div className='bg-gray-200 p-4 flex flex-col items-center'>
						<Image
							src='/avatar3.png'
							alt='Avatar'
							width={150}
							height={150}
							className='rounded-full'
						/>
						<h1 className='text-xl font-semibold mt-4'>Jane Doe</h1>
						<p className='text-sm text-gray-600'>Designer</p>
					</div>
					<div className='col-span-2 p-6'>
						<h2 className='text-2xl font-bold mb-4'>Profile</h2>
						<p className='text-gray-700 mb-4'>
							Welcome to my profile. I love designing web interfaces and
							creating smooth user experiences.
						</p>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<p className='text-gray-600'>
									<strong>Email:</strong> jane.doe@example.com
								</p>
								<p className='text-gray-600'>
									<strong>Phone:</strong> +123 456 7890
								</p>
							</div>
							<div>
								<p className='text-gray-600'>
									<strong>Location:</strong> New York, USA
								</p>
								<p className='text-gray-600'>
									<strong>Website:</strong> www.janedoe.com
								</p>
							</div>
						</div>
						<h3 className='text-xl font-semibold mt-6 mb-2'>Skills</h3>
						<ul className='list-disc list-inside text-gray-700'>
							<li>UI/UX Design</li>
							<li>Responsive Web Design</li>
							<li>Adobe XD & Figma</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
