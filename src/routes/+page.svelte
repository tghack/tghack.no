<script>
    import bg2 from '$lib/assets/background/02.png';

	import Countdown from '$lib/components/Countdown.svelte';
	import logo from "$lib/assets/logo/hvit_horisontal.svg";

</script>

<div class="relative h-screen w-screen overflow-hidden">

	<!--- creds to Zragon for awesome image blur --->
	<div
		class="absolute inset-0 bg-cover bg-center scale-105"
		style="background-image: url('{bg2}')"
	></div>

	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative flex items-center justify-center h-full">
		<div class="text-center max-w-2xl">
            <a href="/" class="flex items-center justify-center py-8">
                <img src={logo} fetchpriority="high" alt="tghack logo"/>
            </a>
			<Countdown />
			<p class="mt-8 sm:text-xl text-white">
				Norges lengstlevende CTF, som del av Norges største datafestival og LAN-party: <a href="https://www.tg.no/" class="underline hover:text-slate-400">The Gathering</a>
			</p>
		</div>
	</div>

</div>
