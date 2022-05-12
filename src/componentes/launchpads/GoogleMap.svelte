<script>
  export let launchpads;
	import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
  
</script>

<Map lat={35} lon={-84} zoom={3.5}>
	{#each launchpads as launchpad}
    <MapMarker lat={launchpad.latitude} lon={launchpad.longitude} label={launchpad.full_name}/>
  {:else}
    Nothing Found!
  {/each}
</Map>