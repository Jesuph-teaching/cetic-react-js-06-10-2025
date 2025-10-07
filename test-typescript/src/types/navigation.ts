export interface NavItem<P = 'left' | 'right'> {
	title: string;
	link: string;
	icon?: string;
	position: P;
}
