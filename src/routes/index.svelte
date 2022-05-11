<script>
    import company from "../stores/fetchStore";

    let url = "https://api.spacexdata.com/v4/company"
	
	const [data, loading, error, get] = company(url)
    
</script>

<svelte:head>
    <title>Company Info</title>
</svelte:head>
<h1 class="text-3xl font-bold text-navy container w-full mx-auto">
    Hello world!
    
{#if $loading}
Loading: {$loading}
{:else if $error}
Error: {$error}
{:else}
<pre>{JSON.stringify($data, null, 2)}</pre>
{/if}
</h1>