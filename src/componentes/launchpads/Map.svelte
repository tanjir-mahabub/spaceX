<script>
	import { onDestroy, setContext } from 'svelte';
	import { mapbox, key } from '../../stores/mapbox.js';

	setContext(key, {
		getMap: () => map,
	});

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;

	function load() {
		map = new mapbox.Map({
			container,
			style: 'mapbox://styles/tanjir2022/cl338sv07001f14t7zg1b6azd',
			center: [lon, lat],
			zoom,
		});
	}

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

<!-- this special element will be explained in a later section -->
<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
		on:load={load}
	/>
</svelte:head>

<div class="min-h-screen w-full h-full" bind:this={container}>
	{#if map}
		<slot />	
	{/if} 
</div>
