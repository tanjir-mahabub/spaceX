<script>
	import { fade, fly } from 'svelte/transition';

	export let content;

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
				return false;
			}
		};
	}
</script>

<div class="bg" />

<div class="star-field">
	<div class="layer" />
	<div class="layer" />
	<div class="layer" />
</div>

<div class="container mx-auto grid md:grid-cols-2 h-full items-center justify-between px-6">
	<div class="my-5 w-full grid content-center space-y-10 select-none z-20">
		
		<p class="max-h-full">{content.summary}</p>

		<table transition:fade class="table-auto bg-slate-500/20">
			<tbody>
				<tr>
					<td class="border border-slate-700 px-3 py-2">{content.founder}</td>
					<td class="border border-slate-700 px-3 py-2">Founder, CEO, CTO</td>      
				</tr>
				<tr>
					<td class="border border-slate-700 px-3 py-2">{content.coo}</td>
					<td class="border border-slate-700 px-3 py-2">COO</td>
				</tr>
				<tr>
					<td class="border border-slate-700 px-3 py-2">{content.cto_propulsion}</td>
					<td class="border border-slate-700 px-3 py-2">CTO Propulsion</td>
				</tr>
				<tr>
					<td class="border border-slate-700 px-3 py-2">Founded</td>
				<td class="border border-slate-700 px-3 py-2">{content.founded}</td>      
				</tr>
				<tr>
				<td class="border border-slate-700 px-3 py-2">Employees</td>
				<td class="border border-slate-700 px-3 py-2">{content.employees}</td>      
				</tr>
				<tr>
					<td class="border border-slate-700 px-3 py-2">Vehicles</td>
					<td class="border border-slate-700 px-3 py-2">{content.vehicles}</td>
				</tr>
				<tr>
					<td class="border border-slate-700 px-3 py-2">Launch Sites</td>
					<td class="border border-slate-700 px-3 py-2">{content.launch_sites}</td>
				</tr>
				<tr>
					<td class="border border-slate-700 px-3 py-2">Test Sites</td>
					<td class="border border-slate-700 px-3 py-2">{content.test_sites}</td>
				</tr>
			</tbody>
		</table>
		<div class="container">
			<h1 in:fly={{ x: -75, duration: 2000, delay: 500 }} class="text-3xl font-extrabold leading-loose">
				{content.name}
			</h1>

			<address in:fly={{ x: -75, duration: 2000, delay: 250 }}>
				<b>Company Address:</b> <br />
				{content.headquarters.address}<br />
				{content.headquarters.city}, {content.headquarters.state}<br />
				USA
			</address>

			<div class="container grid grid-flow-col w-32 h-20 items-center">
				<a href={content.links.website} target="_blank" class="w-12 shadow-sm">
					<svg class="fill-slate-400 hover:fill-black hover:bg-slate-400 w-10 h-10 p-2 rounded-[100%]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
						<path id="XMLID_1666_" d="M46,0C20.6,0,0,20.6,0,46s20.6,46,46,46s46-20.6,46-46S71.4,0,46,0z M49.7,83.8c-0.2,0-0.4,0-0.7,0.1V62.2  c5.2-0.1,9.9-0.2,14.2-0.5C59.4,73.4,52.3,81.2,49.7,83.8z M42.3,83.8c-2.7-2.7-9.7-10.5-13.5-22.1c4.2,0.3,9,0.5,14.2,0.5v21.7  C42.8,83.9,42.6,83.8,42.3,83.8z M8,46c0-2.5,0.3-5,0.7-7.4c2.2-0.4,6.4-1,12.3-1.6c-0.5,2.9-0.8,5.9-0.8,9.1c0,3.2,0.3,6.2,0.7,9  c-5.8-0.6-10.1-1.2-12.3-1.6C8.3,51,8,48.5,8,46z M26.3,46c0-3.4,0.4-6.6,1-9.6c4.6-0.3,9.8-0.6,15.7-0.6v20.4  c-5.8-0.1-11.1-0.3-15.8-0.7C26.7,52.6,26.3,49.4,26.3,46z M49.6,8.2c2.7,2.7,9.6,10.7,13.5,22.1c-4.2-0.3-8.9-0.5-14.1-0.5V8.1  C49.2,8.1,49.4,8.2,49.6,8.2z M43,8.1v21.7c-5.2,0.1-9.9,0.2-14.1,0.5c3.8-11.4,10.8-19.4,13.4-22.1C42.6,8.2,42.8,8.1,43,8.1z   M49,56.2V35.8c5.8,0.1,11.1,0.3,15.7,0.6c0.6,3,1,6.2,1,9.6c0,3.4-0.3,6.6-0.9,9.6C60.2,55.9,54.9,56.1,49,56.2z M70.9,37  c5.9,0.6,10.1,1.2,12.3,1.6C83.7,41,84,43.5,84,46c0,2.5-0.3,5-0.7,7.4c-2.2,0.4-6.4,1-12.3,1.6c0.5-2.9,0.7-5.9,0.7-9.1  C71.7,42.9,71.4,39.8,70.9,37z M81.4,32.2c-2.8-0.4-6.8-0.9-11.9-1.4c-2.4-8.6-6.6-15.5-10.1-20.4C69.5,14.2,77.5,22.2,81.4,32.2z   M32.6,10.4c-3.6,4.8-7.7,11.7-10.1,20.3c-5,0.4-9,1-11.9,1.4C14.5,22.2,22.6,14.2,32.6,10.4z M10.6,59.8c2.8,0.4,6.8,0.9,11.8,1.4  c2.4,8.6,6.4,15.5,10,20.3C22.4,77.6,14.5,69.7,10.6,59.8z M59.6,81.5c3.6-4.8,7.6-11.6,10-20.2c5-0.4,9-1,11.8-1.4  C77.5,69.7,69.6,77.6,59.6,81.5z"/>
						</svg>
				</a>
				<a href={content.links.flickr} target="_blank" class="w-12 shadow-sm">
					<svg
						class="hover:bg-slate-400 w-10 p-2 rounded-[100%]"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						x="0px"
						y="0px"
						viewBox="0 0 362.68 362.68"
						style="enable-background:new 0 0 362.68 362.68;"
						xml:space="preserve"
					>
						<g>
							<circle style="fill:#005DE1;" cx="85.8" cy="181.34" r="85.8" />
							<circle style="fill:#FF007E;" cx="276.88" cy="181.34" r="85.8" />
						</g>
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
					</svg>
				</a>
				<a href={content.links.twitter} target="_blank" class="w-12 shadow-sm">
					<svg
						class="hover:bg-slate-400 w-10 p-2 rounded-[100%]"
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						viewBox="0 0 48 48"
						style=" fill:#000000;"
						><path class="hover:fill-slate-900"
							fill="#03A9F4"
							d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
	<div in:fly="{{ x: 150, duration: 3000 }}" out:fade class="h-full w-full grid items-center justify-end absolute left-0 right-0 top-50 z-0 lg:relative pr-5 xl:pr-0">
		<div class="w-full">
			<div class="earth-img"></div>
		</div>
	</div>
</div>
