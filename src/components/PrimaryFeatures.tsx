'use client'

import React, {Fragment, useEffect, useRef, useState} from 'react'
import {Tab} from '@headlessui/react'
import clsx from 'clsx'
import {motion} from 'framer-motion'
import {useDebouncedCallback} from 'use-debounce'
import {CircleBackground} from '@/components/CircleBackground'
import {Container} from '@/components/Container'

const features = [
	{
		name: 'Gasketel Onderhoud',
		description:
			'Wij bieden een complete service voor het onderhoud van uw gasketel, van planning tot uitvoering. Ons team gebruikt enkel hoogwaardige onderdelen en materialen, wat de levensduur van uw gasketel verlengt.',
		icon: FireIcon,
		screen: FireScreen,
	},
	{
		name: '24/7 Nooddienst',
		description:
			'Voor noodgevallen buiten kantooruren bieden wij een 24/7 nooddienst. Wij staan altijd voor u klaar om eventuele problemen snel en efficiënt op te lossen.',
		icon: EmergencyIcon,
		screen: EmergencyScreen,
	},
	{
		name: 'Garantie en Prijzen',
		description:
			'Onze diensten worden ondersteund door een robuuste garantie, een bewijs van ons vertrouwen in de kwaliteit en duurzaamheid van ons werk. Met ons bent u verzekerd van topkwaliteit tegen een prijs die recht doet aan uw budget en behoeften.',
		icon: CurrencyIcon,
		screen: CurrencyScreen,
	},
]

function FireIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#A3A3A3"
		     className="w-8 h-8">
			<path strokeLinecap="round" strokeLinejoin="round"
			      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/>
			<path strokeLinecap="round" strokeLinejoin="round"
			      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/>
		</svg>
	)
}

function EmergencyIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#A3A3A3"
		     className="w-8 h-8">
			<path strokeLinecap="round" strokeLinejoin="round"
			      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
		</svg>
	)
}

function CurrencyIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#A3A3A3"
		     className="w-8 h-8">
			<path strokeLinecap="round" strokeLinejoin="round"
			      d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
		</svg>
	)
}

function FireScreen() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.75} stroke="white">
			<path strokeLinecap="round" strokeLinejoin="round"
			      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/>
			<path strokeLinecap="round" strokeLinejoin="round"
			      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/>
		</svg>
	)
}

function EmergencyScreen() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.75} stroke="white">
			<path strokeLinecap="round" strokeLinejoin="round"
			      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
		</svg>
	)
}

function CurrencyScreen() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.75} stroke="white">
			<path strokeLinecap="round" strokeLinejoin="round"
			      d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
		</svg>
	)
}

function usePrevious<T>(value: T) {
	let ref = useRef<T>()
	
	useEffect(() => {
		ref.current = value
	}, [value])
	
	return ref.current
}

function FeaturesDesktop() {
	let [changeCount, setChangeCount] = useState(0)
	let [selectedIndex, setSelectedIndex] = useState(0)
	
	usePrevious(selectedIndex);
	let onChange = useDebouncedCallback(
		(selectedIndex) => {
			setSelectedIndex(selectedIndex)
			setChangeCount((changeCount) => changeCount + 1)
		},
		100,
		{leading: true},
	)
	
	return (
		<Tab.Group
			as="div"
			className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
			selectedIndex={selectedIndex}
			onChange={onChange}
			vertical
		>
			<Tab.List className="relative z-10 order-last col-span-6 space-y-6">
				{features.map((feature, featureIndex) => (
					<div
						key={feature.name}
						className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
					>
						{featureIndex === selectedIndex && (
							<motion.div
								layoutId="activeBackground"
								className="absolute inset-0 bg-gray-800"
								initial={{borderRadius: 16}}
							/>
						)}
						<div className="relative z-10 p-8">
							<feature.icon/>
							<h3 className="mt-2 text-lg font-semibold text-white">
								<Tab className="text-left ui-not-focus-visible:outline-none">
									<span className="absolute inset-0 rounded-2xl"/>
									{feature.name}
								</Tab>
							</h3>
							<p className="mt-2 text-sm text-gray-400">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</Tab.List>
			<div className="relative col-span-6">
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<CircleBackground color="#13B5C8" className="animate-spin-slower"/>
				</div>
				<Tab.Panels as={Fragment}>
					{features.map((feature, featureIndex) =>
						selectedIndex === featureIndex ? (
							<Tab.Panel
								static
								key={feature.name + changeCount}
								className="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
							>
								<div className="w-full flex flex-col items-center animate-fade-in">
									<feature.screen/>
								</div>
							</Tab.Panel>
						) : null,
					)}
				</Tab.Panels>
			</div>
		</Tab.Group>
	)
}

function FeaturesMobile() {
	let [activeIndex, setActiveIndex] = useState(0)
	let slideContainerRef = useRef<React.ElementRef<'div'>>(null)
	let slideRefs = useRef<Array<React.ElementRef<'div'>>>([])
	
	useEffect(() => {
		let observer = new window.IntersectionObserver(
			(entries) => {
				for (let entry of entries) {
					if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
						setActiveIndex(slideRefs.current.indexOf(entry.target))
						break
					}
				}
			},
			{
				root: slideContainerRef.current,
				threshold: 0.6,
			},
		)
		
		for (let slide of slideRefs.current) {
			if (slide) {
				observer.observe(slide)
			}
		}
		
		return () => {
			observer.disconnect()
		}
	}, [slideContainerRef, slideRefs])
	
	return (
		<>
			<div
				ref={slideContainerRef}
				className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
			>
				{features.map((feature, featureIndex) => (
					<div
						key={featureIndex}
						ref={ref => {
							if (ref) slideRefs.current[featureIndex] = ref
						}}
						className="w-full flex-none snap-center px-4 sm:px-6"
					>
						<div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
							<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
								<CircleBackground
									color="#13B5C8"
									className="animate-spin-slower"
								/>
							</div>
							<feature.screen/>
							<div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
								<feature.icon/>
								<h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
									{feature.name}
								</h3>
								<p className="mt-2 text-sm text-gray-400">
									{feature.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-6 flex justify-center gap-3">
				{features.map((_, featureIndex) => (
					<button
						type="button"
						key={featureIndex}
						className={clsx(
							'relative h-0.5 w-4 rounded-full',
							featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
						)}
						aria-label={`Go to slide ${featureIndex + 1}`}
						onClick={() => {
							slideRefs.current[featureIndex].scrollIntoView({
								block: 'nearest',
								inline: 'nearest',
							})
						}}
					>
						<span className="absolute -inset-x-1.5 -inset-y-3"/>
					</button>
				))}
			</div>
		</>
	)
}

export function PrimaryFeatures() {
	return (
		<section
			id="kenmerken"
			aria-label="Features for investing all your money"
			className="bg-gray-900 py-20 sm:py-32"
		>
			<Container>
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
					<h2 className="text-3xl font-medium tracking-tight text-white">
						Ultieme kwaliteit en betrouwbaarheid
					</h2>
					<p className="mt-2 text-lg text-gray-400">
						Bij Uw Onderhoudspartner staan kwaliteit en betrouwbaarheid voorop.
						Wij zijn gespecialiseerd in het onderhouden van gasketels en zetten ons in voor het leveren van
						hoogwaardige service.
						Onze ervaren technici staan klaar om u te voorzien van deskundig onderhoud en advies.
					</p>
				</div>
			</Container>
			<div className="mt-16 md:hidden">
				<FeaturesMobile/>
			</div>
			<Container className="hidden md:mt-20 md:block">
				<FeaturesDesktop/>
			</Container>
		</section>
	)
}
