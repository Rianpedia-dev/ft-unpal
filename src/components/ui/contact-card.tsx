import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

export type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

export type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	socialsNode?: React.ReactNode;
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	socialsNode,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-card border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md border-stone-200',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-amber-500" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-amber-500" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-amber-500" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-amber-500" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-4 py-6 md:p-8 flex flex-col justify-start">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-[#112236]">
							{title}
						</h1>
						<p className="text-muted-foreground max-w-xl text-sm md:text-base lg:text-lg">
							{description}
						</p>
						{contactInfo && contactInfo.length > 0 && (
							<div className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 pt-4">
								{contactInfo.map((info, index) => (
									<ContactInfo key={index} {...info} />
								))}
							</div>
						)}
					</div>

					{socialsNode && (
						<div className="pt-4 mt-2 border-t border-stone-200/80 space-y-2">
							<p className="text-xs font-extrabold uppercase tracking-wider text-[#112236]">
								Ikuti Media Sosial Resmi FT UNPAL:
							</p>
							{socialsNode}
						</div>
					)}
				</div>
			</div>
			<div
				className={cn(
					'bg-slate-50/70 flex h-full w-full items-center border-t p-5 md:col-span-1 md:border-t-0 md:border-l border-slate-200',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-3 py-3', className)} {...props}>
			<div className="bg-amber-500/10 text-amber-800 rounded-xl p-3 shrink-0 border border-amber-400/30">
				<Icon className="h-5 w-5" />
			</div>
			<div>
				<p className="font-semibold text-[#112236] text-sm">{label}</p>
				<p className="text-slate-500 text-xs font-mono">{value}</p>
			</div>
		</div>
	);
}
