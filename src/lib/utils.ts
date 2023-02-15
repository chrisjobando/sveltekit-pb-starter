import type { z, ZodError } from 'zod';

const { randomBytes } = await import('node:crypto');

export const appName = 'ChrisApp';

export const serializeNonPOJOs = <T>(obj: T): T => {
	return structuredClone(obj);
};

export const validateFormData = async <T extends z.ZodTypeAny>(
	formData: FormData,
	schema: T
): Promise<{ formData: z.infer<T>; errors: z.inferFlattenedErrors<typeof schema> | null }> => {
	const body = Object.fromEntries(formData);
	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.error('Error:', err);
		const errors = (err as ZodError).flatten();
		return {
			formData: body,
			errors
		};
	}
};

export const generateUsername = (name: string): string => {
	const id = randomBytes(2).toString('hex');
	return name.slice(0, 5) + id;
};
