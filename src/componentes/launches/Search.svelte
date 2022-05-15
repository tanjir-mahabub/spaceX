<script>
    import Card from './Card.svelte';
    
	export let launches;
	let searchTerm = '';
	let filteredLaunches = [];
	let launchDateValue;
    let launchStatus;
    let lastDate;
    let upcoming;

	$: {
        filterByName(searchTerm);
        filterByDate(launchDateValue);  
        filterByStatus(launchStatus);
        filterByUpcoming(upcoming);
	}
    // && launch.success === Boolean(launchStatus) || !launchStatus 
    const filterByName = (searchTerm) => {        
        filteredLaunches = launches.filter((launch) =>
				launch.name.toLowerCase().includes(searchTerm.toLowerCase())
			).sort((a, b) => a.name.localeCompare(b.name));        
    }        

    const filterByDate = (launchDateValue) => {  

        switch (launchDateValue) {
				case 'lastWeek':
                let lastWeek = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);  
					filteredLaunches = launches.filter(
						(launch) =>
							new Date(launch.date_utc) >= new Date(lastWeek) &&
							new Date(launch.date_utc) <= new Date() &&
                            launch.name.toLowerCase().includes(searchTerm.toLowerCase())
					).sort((a, b) => a.name.localeCompare(b.name));
                    lastDate = lastWeek;
					break;
				case 'lastMonth':
                    let lastMonth = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000);  
					filteredLaunches = launches.filter(
						(launch) =>
							new Date(launch.date_utc) >= new Date(lastMonth) &&
							new Date(launch.date_utc) <= new Date() &&
                            launch.name.toLowerCase().includes(searchTerm.toLowerCase())
					).sort((a, b) => a.name.localeCompare(b.name))
                    lastDate = lastMonth;
					break;
				case 'lastYear':
                    let lastYear = new Date(new Date().getTime() - 365 * 24 * 60 * 60 * 1000);
					filteredLaunches = launches.filter(
						(launch) =>
							new Date(launch.date_utc) >= new Date(lastYear) &&
							new Date(launch.date_utc) <= new Date() &&
                            launch.name.toLowerCase().includes(searchTerm.toLowerCase())
					).sort((a, b) => a.name.localeCompare(b.name));
                    lastDate = lastYear;
					break;
				default:
					break;
			}
    }

    const filterByStatus = () => {
        switch (launchStatus) {
                case 'true':
                    filteredLaunches = launches.filter((launch) =>
                        launch.success == true &&
                        launch.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                        new Date(launch.date_utc) >= new Date(lastDate) &&
						new Date(launch.date_utc) <= new Date()
                    ).sort((a, b) => a.name.localeCompare(b.name));                    
                    break;

                case 'false':
                    filteredLaunches = launches.filter((launch) =>
                        launch.success == false &&
                        launch.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                        new Date(launch.date_utc) >= new Date(lastDate) &&
						new Date(launch.date_utc) <= new Date()
                    ).sort((a, b) => a.name.localeCompare(b.name));                    
                    break;                    
            
                default:
                    break;
            }
    }

    const filterByUpcoming = (upcoming) => {
        if(upcoming) {
            filteredLaunches = launches.filter((launch) =>
                        launch.upcoming == true &&
                        launch.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
						new Date(launch.date_utc) >= new Date() && launch.status == null
                    ).sort((a, b) => a.name.localeCompare(b.name));                    
        } else {
            return [...filteredLaunches];
        }
    }
</script>


    <div class="grid md:grid-cols-4 grid-cols-1 gap-5 items-center">
        <input
            class="px-3 py-1 rounded border-2 border-gray-100 text-slate-700"
            type="text"
            placeholder="Search By Rokect Name"
            bind:value={searchTerm}
        />

        <select class=" px-3 py-1 rounded border-2 border-gray-100 text-slate-700" bind:value={launchDateValue}>
            <option selected disabled hidden>Default</option>
            <option value="lastWeek">Last Week</option>
            <option value="lastMonth">Last Month</option>
            <option value="lastYear">Last Year</option>
        </select>

        <select class=" px-3 py-1 rounded border-2 border-gray-100 text-slate-700" bind:value={launchStatus}>
            <option selected disabled hidden>Default</option>
            <option value="true">Success</option>
            <option value="false">Failure</option>	
        </select>

        <label>
            <input class="px-3 py-3 mr-1 rounded border-2 border-gray-100 text-slate-700" type=checkbox bind:checked={upcoming}>
            Upcoming
        </label>
    </div>

<!-- productCard -->
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
    
        {#each filteredLaunches as launch}
            <Card launch={launch} />
        {:else} 
            <p>Nothing found!</p>
        {/each}
    </div>
