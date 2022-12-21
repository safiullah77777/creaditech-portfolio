import React from 'react';
import Button from '../button/Button';

const Banner2 = () => {
	return (
		<>
			<div
				className="banner2  bg-[url('/assets/images/backgrounds/banner2.png')] relative flex h-[660px] w-full  bg-cover bg-center bg-no-repeat  bg-blend-overlay max-[850px]:h-auto max-[850px]:flex-col max-[850px]:p-0 
    max-[850px]:py-80 "
			>
				<div className="m-auto flex h-full flex-col items-center justify-center font-semibold max-[850px]:mx-auto max-[850px]:max-w-full  max-[850px]:px-8 max-[850px]:pl-12 ">
					<h1 className="robot-condensed flex  flex-wrap gap-[1.5rem] text-65 max-[400px]:text-[50px] font-[600] uppercase items-center justify-center leading-[85%] text-white max-[850px]:text-center max-[850px]:text-[5rem]">
						Our <p className="text-yellow"> Creative</p> Blogs
					</h1>
					<p className="Montserrat mt-4 max-w-[53rem] text-center text-[16px] font-[300] leading-[130%] text-[#FFFFFF] max-[850px]:text-center max-[850px]:text-[2.5rem]">
						We help companies grow by providing them the best software
						development and marketing services in the USA. Get in touch with our
						experts now and make your business reach your targeted audience.
					</p>
					<div className="my-8 flex gap-8 max-[850px]:mx-auto  max-[400px]:flex-col">
						<Button title={'Request a topic'} classes="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner2;
