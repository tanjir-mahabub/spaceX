<script>
    import Loader from '../loader/loader.svelte';
	import launches from '../../stores/fetchStore';
	import Search from './Search.svelte';

	let url = 'https://api.spacexdata.com/v4/launches';

	const [data, loading, error, get] = launches(url);
</script>

<div class="container mx-auto px-5 py-10">
	{#if $loading}
        <Loader />
	{:else if $error}
		Error: {$error}
	{:else}
		<Search launches={$data} />
		<!-- <pre>{JSON.stringify($data, null, 2)}</pre> -->
	{/if}
</div>
