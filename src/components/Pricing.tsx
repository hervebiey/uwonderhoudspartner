'use client'

import React from "react";
import clsx from 'clsx'

import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import {Logomark} from '@/components/Logo'

const plans = [
	{
		name: 'Standaard Onderhoud',
		featured: false,
		price: '€165 / 2 jaar',
		description:
			'Ontvang deskundig onderhoud om de twee jaar voor een blijvende efficiëntie en betrouwbaarheid van uw gasketel. Onze Standaard Onderhoud biedt alles wat u nodig heeft voor een gerust gevoel.',
		features: [
			'Tweejaarlijks volledig onderhoud',
			'Optimalisatie van efficiëntie',
			'Klantenservice met prioriteit',
			'Gedetailleerde veiligheidscontrole',
		],
		logomarkClassName: 'fill-gray-500',
	},
	{
		name: 'Uitgebreid Onderhoud Plus',
		featured: true,
		price: '€195 / 2 jaar',
		description:
			'Upgrade naar Uitgebreid Onderhoud Plus voor alles in het Standaard pakket, plus extra diensten die de levensduur van uw installatie maximaliseren en u volledige gemoedsrust geven.',
		features: [
			'Inclusief alle Standaard diensten',
			'Inspectie elke 2 jaar',
			'24/7 noodondersteuning',
			'Evaluatie van energieprestaties',
			'Gratis onderhoudskit ter waarde van €30',
		],
		logomarkClassName: 'fill-cyan-500',
	},
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
				fill="currentColor"
			/>
			<circle
				cx="12"
				cy="12"
				r="8.25"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function Plan({
	              name,
	              price,
	              description,
	              features,
	              logomarkClassName,
	              featured = false,
              }: {
	name: string
	price: string
	description: string
	features: Array<string>
	logomarkClassName?: string
	featured?: boolean
}) {
	return (
		<section
			className={clsx(
				'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
				featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white',
			)}
		>
			<h3
				className={clsx(
					'flex items-center text-sm font-semibold',
					featured ? 'text-white' : 'text-gray-900',
				)}
			>
				<Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)}/>
				<span className="ml-4">{name}</span>
			</h3>
			<p
				className={clsx(
					'relative mt-5 flex text-3xl tracking-tight',
					featured ? 'text-white' : 'text-gray-900',
				)}
			>
				{price}
			</p>
			<p
				className={clsx(
					'mt-3 text-sm',
					featured ? 'text-gray-300' : 'text-gray-700',
				)}
			>
				{description}
			</p>
			<div className="order-last mt-6">
				<ul
					role="list"
					className={clsx(
						'-my-2 divide-y text-sm',
						featured
							? 'divide-gray-800 text-gray-300'
							: 'divide-gray-200 text-gray-700',
					)}
				>
					{features.map((feature) => (
						<li key={feature} className="flex py-2">
							<CheckIcon
								className={clsx(
									'h-6 w-6 flex-none',
									featured ? 'text-white' : 'text-cyan-500',
								)}
							/>
							<span className="ml-4">{feature}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export function Pricing() {
	
	return (
		<section
			id="prijzen"
			aria-labelledby="pricing-title"
			className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
		>
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<h2
						id="pricing-title"
						className="text-3xl font-medium tracking-tight text-gray-900"
					>
						Eerlijkheid en transparantie
					</h2>
					<p className="mt-2 text-lg text-gray-600">
						Wij geloven in eerlijke en transparante prijzen. Daarom bieden we onze premium service al vanaf
						slechts €165.
						Voor die extra zekerheid kunt u kiezen voor onze optionele onderhoudskit, beschikbaar voor
						slechts €30.
					</p>
				</div>
				
				<div
					className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
					{plans.map((plan) => (
						<Plan key={plan.name} {...plan}/>
					))}
				</div>
			</Container>
		</section>
	)
}
