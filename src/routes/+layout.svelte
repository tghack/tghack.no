<script>
	import "./layout.css";
	import favicon from "$lib/assets/favicon.ico";
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>



<div class="@container">
	<Navbar />
    <div class="flex flex-col @md:flex-row">
			<!-- {@render children()} -->
			<slot />
    </div>
	<Footer />
</div>



