<script>
    import { fade, fly } from 'svelte/transition';

    export let content;


	function typewriter(node, { speed = 1 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
    
</script>



<div class="bg"></div>

<div class="star-field">
<div class="layer"></div>
<div class="layer"></div>
<div class="layer"></div>
</div>


<div class="grid grid-cols-2 h-screen items-center justify-between overflow-hidden">
    <div class="bg-slate-900/50 p-5 h-full w-full">
        <div in:fly="{{ x: -75, duration: 2000 }}" class="">  
            <h1 class="text-3xl font-extrabold">{content.name}</h1>
        
        </div>
        <p transition:typewriter class="py-4">{content.summary}</p>
    </div>
    <div class="w-full">
        <div class="earth-img"></div>
    </div>
</div>


