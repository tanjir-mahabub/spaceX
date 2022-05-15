<script>
    import launchpads from "../../stores/fetchStore";
    import Loader from "../loader/loader.svelte";
    import MapContainer from "./MapContainer.svelte";    

    let url = "https://api.spacexdata.com/v4/launchpads";

    const [data, loading, error, get] = launchpads(url);

</script>

<div class="w-full overflow-hidden">
{#if $loading}
<Loader />
{:else if $error}
Nothing Found!
{:else}
<MapContainer launchpads={$data} />
<!-- <pre>{JSON.stringify($data, null, 2)}</pre> -->
{/if}

</div>