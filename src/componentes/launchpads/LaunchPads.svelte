<script>
    import launchpads from "../../stores/fetchStore";
    import MapContainer from "./MapContainer.svelte";    

    let url = "https://api.spacexdata.com/v4/launchpads";

    const [data, loading, error, get] = launchpads(url);

</script>


{#if $loading}
Loading: {$loading}
{:else if $error}
<!-- Error: {$error} -->
Nothing Found!
{:else}
<MapContainer launchpads={$data} />
<!-- {#each $data as launchpad}
    <p>{launchpad.full_name}</p>
    <small>Latitude: {launchpad.latitude}</small>
    <small>Longitude: {launchpad.longitude}</small>    
{:else} 
    <p>Nothing found!</p>
{/each} -->
<!-- <pre>{JSON.stringify($data, null, 2)}</pre> -->
{/if}
