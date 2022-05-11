<script>
    import launchpads from "../stores/fetchStore";

    let url = "https://api.spacexdata.com/v4/launchpads";

    const [data, loading, error, get] = launchpads(url);

</script>


{#if $loading}
Loading: {$loading}
{:else if $error}
Error: {$error}
{:else}
<pre>{JSON.stringify($data, null, 2)}</pre>
{/if}