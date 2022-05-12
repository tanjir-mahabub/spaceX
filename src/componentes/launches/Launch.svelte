<script>
    import launches from "../../stores/fetchStore";
    import Search from "./Search.svelte";

    let url = "https://api.spacexdata.com/v4/launches";

    const [data, loading, error, get] = launches(url);

</script>


{#if $loading}
Loading: {$loading}
{:else if $error}
Error: {$error}
{:else}
<Search launches={$data} />
<!-- <pre>{JSON.stringify($data, null, 2)}</pre> -->
{/if}
