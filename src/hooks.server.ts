import type { User } from '$lib/types';
import { serializeNonPOJOs } from '$lib/utils';
import type { Handle } from '@sveltejs/kit';
import Pocketbase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase('http://127.0.0.1:8090/');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// Get an up-to-date auth store state by veryfing and refreshing the loaded auth model (if any)
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
		}
	} catch (_err) {
		// Clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
	}

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs<User>(event.locals.pb.authStore.model as User);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);
	response.headers.set('Set-Cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
	return response;
};
