<script>
    import bg2 from '$lib/assets/background/02.png';

	import logo from "$lib/assets/logo/hvit_horisontal.svg";
	import Countdown from '$lib/components/Countdown.svelte';

</script>

<div class="relative h-screen w-screen overflow-hidden">

	<!--- creds to Zragon for awesome image blur --->
	<div
		class="absolute inset-0 bg-cover bg-center scale-105"
        style="background-image: url('{bg2}')">
    </div>

   <!-- black tint overlay bg -->
	<div class="absolute inset-0 bg-black/30"></div>

    <div class="relative flex items-center justify-center h-full">
		<div class="text-center">
				<div class="flex items-center justify-center py-18">
					<img class="scale-85 md:scale-200" src={logo} fetchpriority="high" alt="tghack logo"/>
				</div>
			<Countdown />
			<div class="mt-8 text-lg sm:text-xl text-white px-8 py-8">
				Norges lengstlevende CTF, som del av Norges største datafestival og LAN-party: <a href="https://www.tg.no/" class="underline hover:text-slate-400">The Gathering</a>
			</div>
				<a href="https://ctf.tghack.no" class="px-8 py-4 text-xl font-bold text-white 
					bg-black border-2 border-green-400 rounded-xl
					shadow-[0_0_20px_rgba(74,222,128,0.8)] 
					hover:shadow-[0_0_30px_rgba(74,222,128,1)] 
					transition duration-300">
					Spill!
				</a>
		</div>
	</div>

</div>
