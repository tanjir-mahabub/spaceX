<script>
	import { getContext } from 'svelte';
	import { mapbox, key } from '../../stores/mapbox.js';

	const { getMap } = getContext(key);
	const map = getMap();

	export let lat;
	export let lon;
	export let label;

    let popupClass = 'p-3 my-class';

	const popup = new mapbox.Popup({ 
        closeOnClick: false, 
         offset: 25,
         className: 'mapPopup' })
		.setHTML(label);
    

	const marker = new mapbox.Marker()
		.setLngLat([lon, lat])
		.setPopup(popup)
		.addTo(map).togglePopup();;
        
</script>