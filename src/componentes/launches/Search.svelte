<script>
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

<input
	class="rounded border-2 border-gray-100"
	type="text"
	placeholder="Search By Rokect Name"
	bind:value={searchTerm}
/>

<select class="rounded border-2 border-gray-100" bind:value={launchDateValue}>
	<option selected disabled hidden>Default</option>
	<option value="lastWeek">Last Week</option>
	<option value="lastMonth">Last Month</option>
	<option value="lastYear">Last Year</option>
</select>

<select class="rounded border-2 border-gray-100" bind:value={launchStatus}>
	<option selected disabled hidden>Default</option>
	<option value="true">Success</option>
	<option value="false">Failure</option>	
</select>

<label>
    <input type=checkbox bind:checked={upcoming}>
    Upcoming
</label>

<!-- productCard -->

{#each filteredLaunches as launch}
    <p>{launch.name}</p>
    <small>{launch.date_utc}</small>
    <small>Success Status: {launch.success}</small>
    <small>Upcoming: {launch.upcoming}</small>
{:else} 
    <p>Nothing found!</p>
{/each}
