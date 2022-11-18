import Image from 'next/image';
import React, { useState } from 'react';
import Banner2 from '../components/banner2/Banner2';
import Card6 from '../components/card6/Card6';
import Card7 from '../components/card7/Card7';
import Card8 from '../components/card8/Card8';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import phone from '../public/assets/images/phone.png';
import chat from '../public/assets/images/chat.png';
import Pagination from '../components/pagination/Pagination';
import Slider from '../components/slider/Slider';

const CreativeBlogs = () => {
	const [hover, setHover] = useState(false);
	const [hover1, setHover1] = useState(false);

	return (
		<>
			<Header />
			<Banner2 />
			<div className="flex flex-wrap justify-center gap-5 p-8">
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
				<Card8 />
			</div>
			<Pagination />
			<Slider />
			<Footer />
		</>
	);
};

export default CreativeBlogs;
