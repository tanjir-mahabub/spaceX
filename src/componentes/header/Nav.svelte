<script>
  import { onMount } from 'svelte';

  let url;
  let navActive;

  onMount(() => {
    url = window.location.pathname; 
    navActive = navList.querySelector(`a[href="${url}"]`);
    navActive.classList.add('text-blue-700')
  })
  
    let navList; 
    let lineOne;
    let lineTwo;
    let lineThree;
    let lineFour;
    
    function menuBTN () {
        lineOne.classList.toggle('top-18px')
        lineOne.classList.toggle('w-auto')
        lineOne.classList.toggle('left-[50%]')
        lineTwo.classList.toggle('rotate-45')
        lineThree.classList.toggle('-rotate-45')
        lineFour.classList.toggle('top-18px')
        lineFour.classList.toggle('w-auto')
        lineFour.classList.toggle('left-[50%]')
        navList.classList.toggle('hidden');
    }

    function currentLink (e) {
       let alink = navList.querySelectorAll('a');
       for (let i = 0; i < alink.length; i++) {
            alink[i].classList.add('text-slate-400');
            alink[i].classList.remove('text-blue-700');
            e.target.classList.remove('text-slate-400')
        }
       e.target.classList.add('text-blue-700')
    }
</script>

<header class="w-full shadow-lg sticky top-0 z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b bg-slate-900/75 border-b border-slate-50/10">
    <nav class="px-3 md:h-20 md:flex items-center">
        <div class="container mx-auto flex flex-wrap items-center justify-between px-3">
          <a href="/" class="flex">           
              <span class="self-center md:text-4xl text-3xl font-extrabold whitespace-nowrap pb-3">SapceX</span>
          </a>
          <button on:click={menuBTN} type="button" class="md:hidden ml-3 inline-flex items-center justify-center" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <div class="w-6 h-6 relative rotate-0 transition duration-500 ease-in-out cursor-pointer">
                <span bind:this={lineOne} class="block absolute top-[1px] left-0 bg-slate-400 w-full h-1 rounded opacity-100 transition duration-300 ease-in-out"></span>
                <span bind:this={lineTwo} class="block absolute top-2 left-0 bg-slate-400 w-full h-1 rounded opacity-100 transition duration-300 ease-in-out"></span>
                <span bind:this={lineThree} class="block absolute top-2 left-0 bg-slate-400 w-full h-1 rounded opacity-100 transition duration-300 ease-in-out"></span>
                <span bind:this={lineFour} class="block absolute top-4 left-0 bg-slate-400 w-full h-[3px] rounded opacity-100 transition duration-300 ease-in-out"></span>
              </div>
          </button>
          <div bind:this={navList} class="hidden md:block w-full md:w-auto h-full md:pb-0 pb-5 transition-all duration-1000 ease-in-out" id="mobile-menu">
            <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a on:click={currentLink} href="/" class="md:hover:bg-transparent text-slate-400 hover:bg-slate-400 border-b border-slate-400 md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Home</a>
              </li>
              <li>
                <a on:click={currentLink} href="/launches" class="text-slate-400 hover:bg-slate-400 border-b border-slate-400 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Launches</a>
              </li>
              <li>
                <a on:click={currentLink} href="/launchpads" class="text-slate-400 hover:bg-slate-400 border-b border-slate-400 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Launchpads</a>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
</header>