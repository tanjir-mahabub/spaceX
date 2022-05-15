{#if loaded}
	{#if src}	
		<img {src} alt="Document" />
	{:else}
	<img src="{notFoundImg}" alt="Not Found" />
	{/if}
{:else if failed}
	<img src="{notFoundImg}" alt="Not Found" />
{:else if loading}
	<img src="{loader}" alt="Loading..." class="opacity-20 p-5"/>
{/if}

<script>
	import notFoundImg from '../../images/not-found-icon.jpg';
	import loader from '../../images/loading-gif.gif';

	import { onMount } from 'svelte'
	export let src;

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
			const img = new Image();
			img.src = src;
			loading = true;

			img.onload = () => {
					loading = false;
					loaded = true;
			};
			img.onerror = () => {
					loading = false;
					failed = true;
			};
	})
</script>