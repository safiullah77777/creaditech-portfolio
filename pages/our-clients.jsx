import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../components/button/Button';
import Button2 from '../components/button2/Button2';
import Header from '../components/header/Header';
import client1 from '../public/assets/images/client1.png';
import client2 from '../public/assets/images/client2.png';
import client3 from '../public/assets/images/client3.png';
import client4 from '../public/assets/images/client4.png';
import client5 from '../public/assets/images/client5.png';
import client6 from '../public/assets/images/client6.png';
import client7 from '../public/assets/images/client7.png';
import Card3 from '../components/card3/Card3';
import Pagination from '../components/pagination/Pagination';
import Slider from '../components/slider/Slider';
import Footer from '../components/footer/Footer';
// import client1 from '../public/assets/images/client1.png'

const OurClients = () => {
	const [hover, setHover] = useState(false);
	const [hover1, setHover1] = useState(false);
	return (
		<>
			<Header />
			<div
				className="banner3 relative flex h-[100vh] w-full  bg-cover bg-center bg-no-repeat bg-blend-overlay max-[850px]:h-[90rem] max-[850px]:flex-col max-[850px]:p-0 
    max-[850px]:pt-80"
			>
				<div className="m-auto flex h-full flex-col items-center justify-center font-semibold max-[850px]:mx-auto max-[850px]:max-w-full  max-[850px]:px-8 max-[850px]:pl-12 ">
					<h1 className="flex max-w-[71rem] flex-wrap justify-center gap-[1.5rem] text-center robot-condensed text-65 uppercase leading-[81%] text-white max-[850px]:text-center max-[850px]:text-[5rem]">
						<span> Every</span> <span className="text-yellow">Great</span>{' '}
						<span className="text-yellow">Brand</span> <span>is</span> Like a
						<span className="text-yellow">Great Story</span>
						{/* {"Every "} <span className="text-yellow"> Great brands {" "}</span> is like a{" "}
            <span className="text-yellow"> grand story</span> */}
					</h1>
					<p className="mt-4 text-center max-w-[53rem] text-16 font-light leading-130 text-white max-[850px]:text-center max-[850px]:text-[2.5rem]">
						We help companies grow by providing them the best software
						development and marketing services in the USA. Get in touch with our
						experts now and make your business reach your targeted audience.
					</p>
					<div className="my-8 flex gap-8 max-[850px]:mx-auto  max-[400px]:flex-col">
						<Button classes="" title={'Contact Us'} />
						<Button2 title={'Custom Quote'} />
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-8 py-[8rem]">
				<h2 className="clash mx-auto text-[6rem] font-600 leading-[90%] text-[#2A2A2A] max-[640px]:text-center max-[640px]:text-[4rem]">
					Our Clients
				</h2>

				<div className="marquee">
					<div className="marquee--inner">
						<div className="flex h-full">
							<Image
								className="h-full"
								src={client1}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client2}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client3}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client4}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client5}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client6}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client7}
								alt=""
								width={204}
								height={204}
							/>
							{/* <Image src={client1} alt="" width={204} height={204} /> */}
						</div>
						<div className="flex h-full">
							<Image
								className="h-full"
								src={client1}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client2}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client3}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client4}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client5}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client6}
								alt=""
								width={204}
								height={204}
							/>
							<Image
								className="h-full"
								src={client7}
								alt=""
								width={204}
								height={204}
							/>
							{/* <Image src={client1} alt="" width={204} height={204} /> */}
						</div>
					</div>
				</div>
				{/* <div className="flex">
          <Image src={client1} alt="" width={204} height={204} />
          <Image src={client2} alt="" width={204} height={204} />
          <Image src={client3} alt="" width={204} height={204} />
          <Image src={client4} alt="" width={204} height={204} />
          <Image src={client5} alt="" width={204} height={204} />
          <Image src={client6} alt="" width={204} height={204} />
          <Image src={client7} alt="" width={204} height={204} />
        </div> */}
				<div className="mt-[6rem] mb-[4rem] flex flex-wrap justify-center gap-4">
					<button className="clash rounded-[10px]  bg-[#000]  px-[2rem] py-[1.5rem] text-[20px] font-500 text-white">
						All
					</button>
					<button className="clash rounded-[10px] border-[1px] border-solid border-[#000] bg-[white] px-[2rem]  py-[1.5rem] text-[20px] font-500 text-[#000] hover:bg-[#000] hover:text-white ">
						Web Developemnt
					</button>
					<button className="clash rounded-[10px] border-[1px] border-solid border-[#000] bg-[white] px-[2rem]  py-[1.5rem] text-[20px] font-500 text-[#000] hover:bg-[#000] hover:text-white ">
						App Developemnt
					</button>
					<button className="clash rounded-[10px] border-[1px] border-solid border-[#000] bg-[white] px-[2rem]  py-[1.5rem] text-[20px] font-500 text-[#000] hover:bg-[#000] hover:text-white ">
						UI / UX Design
					</button>
					<button className="clash rounded-[10px] border-[1px] border-solid border-[#000] bg-[white] px-[2rem]  py-[1.5rem] text-[20px] font-500 text-[#000] hover:bg-[#000] hover:text-white ">
						Graphic Design
					</button>
					<button className="clash rounded-[10px] border-[1px] border-solid border-[#000] bg-[white] px-[2rem]  py-[1.5rem] text-[20px] font-500 text-[#000] hover:bg-[#000] hover:text-white ">
						Content Writing
					</button>
				</div>
				<div className="flex flex-wrap justify-center gap-[1rem]">
					<Card3 classes="bg-[url('/assets/images/backgrounds/portfolio-img.png')]" />
					<Card3 classes="bg-[url('/assets/images/backgrounds/portfolio-img2.png')]" />
					<Card3 classes="bg-[url('/assets/images/backgrounds/portfolio-img3.png')]" />
					<Card3 classes="bg-[url('/assets/images/backgrounds/portfolio-img4.png')]" />
					<Card3 classes="bg-[url('/assets/images/backgrounds/portfolio-img5.png')]" />
					<Card3 classes="bg-[url('/assets/images/backgrounds/portfolio-img6.png')]" />
					<Card3 classes="bg-[url('/assets/images/backgrounds/portfolio-img7.png')]" />
					<Card3 classes="bg-[url('/assets/images/backgrounds/portfolio-img8.png')]" />
				</div>
				<Pagination />
			</div>
			<Slider />
			<Footer />
		</>
	);
};

export default OurClients;
