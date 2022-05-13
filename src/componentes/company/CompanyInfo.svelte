<script>
    import company from "../../stores/fetchStore";

    let url = "https://api.spacexdata.com/v4/company"
	
	const [data, loading, error, get] = company(url)
    
</script>


{#if $loading}
Loading: {$loading}
{:else if $error}
<!-- Error: {$error} -->
Nothing found!
{:else}
<div class="container w-full mx-auto">

    <!-- <pre>{JSON.stringify($data, null, 2)}</pre> -->
</div>
{/if}