<script lang="ts">
	// Interfaces
	import type { User } from '$lib/types';

	// Svelte Props
	import { page } from '$app/stores';

	// Constants
	import { appName } from '$lib/utils';
	import { authRoutes, loginRoutes } from '$lib/routes';

	// Props
	export let user: User | undefined;
</script>

<div class="navbar bg-base-200 fixed">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">{appName}</a>
	</div>

	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#if user}
				{#each authRoutes as route (route.path)}
					<li class="ml-2 first-of-type:ml-0">
						<a href={route.path} class:active={$page.url.pathname === route.path}>{route.title}</a>
					</li>
				{/each}

				<li class="ml-2">
					<form action="/logout" method="POST">
						<button type="submit">Logout</button>
					</form>
				</li>
			{:else}
				{#each loginRoutes as route (route.path)}
					<li class="ml-2 first-of-type:ml-0">
						<a href={route.path} class:active={$page.url.pathname === route.path}>{route.title}</a>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</div>
