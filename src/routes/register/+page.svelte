<script lang="ts">
	import type { ActionData } from './$types';
	import { applyAction, enhance } from '$app/forms';

	export let form: ActionData;
</script>

<div class="flex h-screen">
	<div class="flex flex-col items-center w-1/2 mt-32 px-4">
		<h1 class="text-2xl">Create an account</h1>

		<form method="POST" action="?/register" class="flex flex-col items-center w-full space-y-2">
			<div class="formInput">
				<label for="name">
					<h1>Name</h1>
				</label>
				<input type="text" name="name" placeholder="Name" />
				{#if form?.errors?.name}
					{#each form?.errors?.name as error}
						<label for="name" class="label py-0">
							<div class="label-text-alt text-error">{error}</div>
						</label>
					{/each}
				{/if}
			</div>

			<div class="formInput">
				<label for="email">
					<h1>Email</h1>
				</label>
				<input type="text" name="email" placeholder="Email" />
				{#if form?.errors?.email}
					{#each form?.errors?.email as error}
						<label for="name" class="label py-0">
							<div class="label-text-alt text-error">{error}</div>
						</label>
					{/each}
				{/if}
			</div>

			<div class="formInput">
				<label for="password">
					<h1>Password</h1>
				</label>
				<input type="password" name="password" placeholder="Password" />
				{#if form?.errors?.password}
					{#each form?.errors?.password as error}
						<label for="name" class="label py-0">
							<div class="label-text-alt text-error">{error}</div>
						</label>
					{/each}
				{/if}
			</div>

			<div class="formInput">
				<label for="passwordConfirm">
					<h1>Confirm Password</h1>
				</label>
				<input type="password" name="passwordConfirm" placeholder="Confirm Password" />
				{#if form?.errors?.passwordConfirm}
					{#each form?.errors?.passwordConfirm as error}
						<label for="name" class="label py-0">
							<div class="label-text-alt text-error">{error}</div>
						</label>
					{/each}
				{/if}
			</div>

			<div class="formSubmitBtn">
				<button type="submit">Create Account</button>
			</div>

			<p class="mt-2">Already have an account? <a href="/login" class="link">Sign in</a></p>
		</form>
	</div>
	<div class="w-1/2 bg-primary" />
</div>
