import type { Record } from 'pocketbase';

interface User extends Record {
	id: string;
	name: string;
	avatar?: string;
	username: string;
}
