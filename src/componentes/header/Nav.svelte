<script>
    let navList; 
    let navLink;
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

<header class="w-full shadow-lg sticky top-0 z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 bg-slate-900/75">
    <nav class="border-gray-200 px-2 md:h-20 md:flex items-center">
        <div class="container mx-auto flex flex-wrap items-center justify-between px-3">
          <a href="/" class="flex">           
              <span class="self-center md:text-4xl text-3xl font-extrabold whitespace-nowrap pb-3">sapceX</span>
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
                <a on:click={currentLink} bind:this={navLink} href="/" class="md:hover:bg-transparent text-slate-400 hover:bg-slate-400 border-b border-slate-400 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Home</a>
              </li>
              <li>
                <a on:click={currentLink} bind:this={navLink} href="/launches" class="text-slate-400 hover:bg-slate-400 border-b border-slate-400 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Launches</a>
              </li>
              <li>
                <a on:click={currentLink} bind:this={navLink} href="/launchpads" class="text-slate-400 hover:bg-slate-400 border-b border-slate-400 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Launchpads</a>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
</header>

<!-- 
<style>
    
#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4 {
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span, #nav-icon3 span, #nav-icon4 span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}


#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 18px;
}

#nav-icon3 span:nth-child(4) {
  top: 36px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

</style> -->