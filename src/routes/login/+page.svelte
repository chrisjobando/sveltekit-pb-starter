<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex h-screen">
	<div class="flex flex-col items-center w-1/2 mt-32 px-4">
		<h1 class="text-2xl">Welcome back!</h1>

		<form method="POST" action="?/login" class="flex flex-col items-center w-full space-y-2">
			<div class="formInput">
				<label for="email">
					<h1>Email</h1>
				</label>
				<input type="text" name="email" placeholder="Email" value={form?.data?.email ?? ''} />
			</div>

			<div class="formInput">
				<label for="password">
					<h1>Password</h1>
				</label>
				<input type="password" name="password" placeholder="Password" />
			</div>

			<div class="formSubmitBtn">
				<button type="submit">Log in</button>
			</div>

			<p class="mt-2">Don't have an account? <a href="/register" class="link">Sign up</a></p>

			{#if form?.invalidCredentials}
				<p class="alert alert-error shadow-lg w-full max-w-md">Invalid credentials</p>
			{/if}
		</form>
	</div>
	<div class="w-1/2 bg-primary" />
</div>
