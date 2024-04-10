import Link from 'next/link'
import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'
import {NavLinks} from '@/components/NavLinks'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
			<path
				d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export function Footer() {
	return (
		<footer className="border-t border-gray-200">
			<Container>
				<div
					className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
					<div>
						<div className="flex items-center text-gray-900">
							<Logo className="h-12 w-auto"/>
						</div>
					</div>
					<div
						className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
						<div className="relative flex h-24 w-24 flex-none items-center justify-center">
							<QrCodeBorder
								className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500"/>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
							     stroke="#404040" className="w-16 h-16">
								<path strokeLinecap="round" strokeLinejoin="round"
								      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
							</svg>
						</div>
						<div className="ml-8 lg:w-64">
							<p className="text-base font-semibold text-gray-900">
								<Link href="mailto:info@uwonderhoudspartner.be">
									<span className="absolute inset-0 sm:rounded-2xl"/>
									Neem contact op
								</Link>
							</p>
							<p className="mt-1 text-sm text-gray-700">
								Wij zijn bereikbaar van maandag tot vrijdag van 09:00 tot 18:00 uur.
							</p>
							<Link className="mt-1 text-sm text-gray-900" href="tel:+32 487 38 43 23">
								+32 487 38 43 23
							</Link>
						</div>
					</div>
				</div>
				<div
					className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
					<p className="mt-6 text-sm text-gray-500 md:mt-0">
						&copy; Copyright {new Date().getFullYear()} Covalliant. Alle rechten voorbehouden.
					</p>
					<nav className="flex gap-8 w-full justify-center md:w-auto">
						<NavLinks/>
					</nav>
				</div>
			</Container>
		</footer>
	)
}
