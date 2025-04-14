import React from 'react';
import Leftside from './leftside/Left-side';
import RightSide from './rightside/Right-side';
import Main from './main/main';

function Content() {
	return (
		<div className='min-h-screen'>
			<Leftside />
			<Main />
			<RightSide />
		</div>
	);
}

export default Content;
