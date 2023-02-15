<script lang="ts">
	// Components
	import NavBar from '$lib/components/NavigationBar/index.svelte';

	// Interfaces
	import type { PageData } from './$types';

	// Styling
	import '../app.postcss';

	// Props
	export let data: PageData;
</script>

<NavBar user={data.user} />

<div class="h-full">
	<slot />
</div>
