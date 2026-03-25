<script>
	import favicon from "$lib/assets/favicon.ico";
	import logo from "$lib/assets/logo/hvit_horisontal_600px.png";

	let open = false;
	let dropdownOpen = false;

	function toggle() {
		open = !open;
	}

	function close() {
		open = false;
	}

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	function closeDropdown() {
		dropdownOpen = false;
	}
</script>

<nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-black/90 ">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">

			<a href="/" class="flex">
				<img src={logo} alt="tghack logo" class="h-8 w-auto" />
			</a>

			<!-- Desktop menu -->
			<div class="hidden sm:flex space-x-4 right-align">

				<a href="/" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-slate-400 transition-colors">
					Heim
				</a>

				<a href="/about" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-slate-400 transition-colors">
					Om oss
				</a>

				<a href="/what" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-slate-400 transition-colors">
					Hva er en CTF
				</a>

				<!-- <div class="relative">
					<button
						on:click={toggleDropdown}
						class="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-slate-400 transition-colors"
						aria-expanded={dropdownOpen}
					>
						Ressurser
					</button>

					{#if dropdownOpen}
						<div class="absolute right-0 mt-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-md min-w-[160px]">

							<a href="/faq" on:click={closeDropdown}
								class="block px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
								Foo
							</a>

							<a href="/contact" on:click={closeDropdown}
								class="block px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
								Bar
							</a>

						</div>
					{/if}
				</div> -->

			<a href="/faq" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-slate-400 transition-colors">
					FAQ
				</a>
			</div>

			<!-- Mobile button -->
			<button
				on:click={toggle}
				class="sm:hidden p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
				aria-label="Toggle menu"
				aria-expanded={open}
			>
				{#if open}
					✕
				{:else}
					☰
				{/if}
			</button>

		</div>
	</div>

	<!-- Mobile menu -->
	{#if open}
		<div class="sm:hidden bg-black/60 backdrop-blur-md border-t border-white/10 px-4 py-3 space-y-2">

			<a href="/" on:click={close} class="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
				Hjem
			</a>

			<a href="/info" on:click={close} class="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
				Om Oss
			</a>

			<a href="/what" on:click={close} class="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
				Hva er en CTF?
			</a>

				<!-- <div class="relative">
					<button
						on:click={toggleDropdown}
						class="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-slate-400 transition-colors"
						aria-expanded={dropdownOpen}
					>
						Ressurser
					</button>

					{#if dropdownOpen}
						<div class="absolute right-0 mt-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-md min-w-[160px]">

							<a href="/foo" on:click={closeDropdown}
								class="block px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
								Foo
							</a>

							<a href="/bar" on:click={closeDropdown}
								class="block px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
								Bar
							</a>

						</div>
					{/if}
				</div> -->

			<a href="/faq" on:click={close} class="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">
				FAQ
			</a>

		</div>
	{/if}
</nav>