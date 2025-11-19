import { DumbbellIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Logo({ className }: { className?: string }) {
	return (
		<a className={cn('flex gap-2 text-2xl font-bold', className)} href="/#">
			<DumbbellIcon className="size-8" />
			FitTrack
		</a>
	);
}
