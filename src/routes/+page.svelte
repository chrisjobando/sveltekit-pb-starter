<script lang="ts">
	// Interfaces
	import type { PageData } from './$types';

	// Constants
	import { appName } from '$lib/utils';

	// Props
	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="pageContainer">
	{#if data?.user?.name}<h1 class="text-xl">Welcome {data.user.name}!</h1>
	{:else}
		<h1 class="text-xl">
			Welcome to {appName}, please log into your account or create a new one to continue.
		</h1>
	{/if}
</div>
