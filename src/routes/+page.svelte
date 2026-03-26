<script>
    import bg2 from '$lib/assets/background/02.png';

	import Countdown from '$lib/components/Countdown.svelte';
	import logo from "$lib/assets/logo/hvit_horisontal.svg";

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
			<div class="flex mt-8 sm:text-xl text-white">
				Norges lengstlevende CTF, som del av Norges største datafestival og LAN-party: <a href="https://www.tg.no/" class="underline hover:text-slate-400">The Gathering</a>
			</div>
		</div>
	</div>

</div>
