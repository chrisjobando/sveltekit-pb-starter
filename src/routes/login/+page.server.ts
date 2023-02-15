import { loginUserSchema } from '$lib/schema';
import { serializeNonPOJOs, validateFormData } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import { ZodError } from 'zod';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	login: async ({ locals, request }) => {
		const { formData, errors } = await validateFormData(await request.formData(), loginUserSchema);

		if (errors) {
			return serializeNonPOJOs({
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
		} catch (err) {
			console.error('Error', err);
			if (err instanceof ClientResponseError) {
				throw error(err.status, err.data.message);
			}

			if (err instanceof ZodError) {
				const { fieldErrors } = err.flatten();
				return serializeNonPOJOs({
					data: formData,
					errors: fieldErrors
				});
			}
		}

		throw redirect(303, '/');
	}
};
