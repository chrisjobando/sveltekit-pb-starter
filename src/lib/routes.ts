type Route = {
	path: string;
	title: string;
};

export const loginRoutes: Route[] = [
	{ path: '/login', title: 'Login' },
	{ path: '/register', title: 'Register' }
];
export const authRoutes: Route[] = [{ path: '/', title: 'Home' }];
