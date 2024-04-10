import {Inter} from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import {type Metadata} from 'next'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: {
		template: '%s - Uw Onderhoudspartner',
		default: 'Uw Onderhoudspartner - Uw betrouwbare partner voor het onderhoud van uw gasketel.',
	},
	description:
		'Bij Uw Onderhoudspartner staan kwaliteit en betrouwbaarheid voorop. Wij zijn gespecialiseerd in het onderhouden van gasketels en zetten ons in voor het leveren van hoogwaardige service.',
}

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
		<body>{children}</body>
		</html>
	)
}
