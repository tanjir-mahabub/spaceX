<script>
  export let launchpads;
	import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
  let card;
</script>


<Map lat={35} lon={-84} zoom={3.5}>
	{#each launchpads as launchpad}   
  test 
    {
      card = `      
        <h4 class='font-extrabold leading-tight'>${launchpad.full_name}</h4>
        <p>${launchpad.name}</p>
      `
    }
    <MapMarker lat={launchpad.latitude} lon={launchpad.longitude} label={card}/>
  {/each}
</Map>