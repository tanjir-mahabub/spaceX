<script>
    import Content from "./Content.svelte";
    import company from "../../stores/fetchStore";
import Loader from "../loader/loader.svelte";

    let url = "https://api.spacexdata.com/v4/company"
	
	const [data, loading, error, get] = company(url)
    
</script>


{#if $loading}
   <Loader />
{:else if $error}
<!-- Error: {$error} -->
Nothing found!
{:else}
<div class="w-full h-full mx-auto bg-gradient-to-r from-slate-900 to-slate-900/20">
    <Content content={$data} />
    <!-- <pre>{JSON.stringify($data, null, 2)}</pre> -->
</div>
{/if}


