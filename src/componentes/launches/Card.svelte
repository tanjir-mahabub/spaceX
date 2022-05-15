<script>
    import { fade, fly } from 'svelte/transition';
import Image from '../Image/Image.svelte';
    export let launch;

    function launchDate(lDate) {
        let date = new Date(lDate);
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        lDate = months[month].slice(0,3) + ' ' + day + ', ' + year;

        return lDate;
        
    }
</script>


<div transition:fly="{{ y: 50, duration: 500 }}" class="grid gap-2 w-full bg-slate-400 text-slate-900 p-4 rounded shadow-md">
    <div class="flex justify-center p-4" >
        <div class="w-[50%]">
            <Image src={launch.links.patch.small ?? launch.links.patch.large } />
        </div>
    </div>
    <div class="">
        <h4 class="text-md font-bold">{launch.name}</h4>
        <small><b>Launch Date: {launchDate(launch.date_utc)}</b></small>
        <small>Success Status: {launch.success}</small>
        <small>Upcoming: {launch.upcoming}</small>
        <small>Flight Number: {launch.flight_number}</small>
    </div>
</div>