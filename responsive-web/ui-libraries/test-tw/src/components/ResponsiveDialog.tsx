import { useMediaQuery } from 'usehooks-ts';
import { DrawerDemo } from './DrawerDemo';
import { DialogDemo } from './DialogDemo';

export default function ResponsiveDialog() {
	const isMobile = useMediaQuery('(max-width: 768px)');
	if (isMobile) {
		return <DrawerDemo />;
	}

	return <DialogDemo />;
}
