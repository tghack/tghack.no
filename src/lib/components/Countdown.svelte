<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	const TARGET_DATE = new Date("2027-03-24T19:00:00+02:00");

	interface TimeLeft {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	}

	let time: TimeLeft | null = getTimeLeft();
	let interval: ReturnType<typeof setInterval>;

	function getTimeLeft(): TimeLeft | null {
		const distance = TARGET_DATE.getTime() - Date.now();
		if (distance < 0) return null;

		return {
			days: Math.floor(distance / (1000 * 60 * 60 * 24)),
			hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
			seconds: Math.floor((distance % (1000 * 60)) / 1000)
		};
	}

	function pad(n: number) {
		return n.toString().padStart(2, "0");
	}

	function formatDate(date: Date) {
		return date.toLocaleString("no-NO", {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		});
	}

	onMount(() => {
		interval = setInterval(() => {
			time = getTimeLeft();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	const units = () =>
		time && [
			{ value: time.days, label: `dag${time.days !== 1 ? "er" : ""}` },
			{ value: pad(time.hours), label: `time${time.hours !== 1 ? "r" : ""}` },
			{ value: pad(time.minutes), label: `minutt${time.minutes !== 1 ? "er" : ""}` },
			{ value: pad(time.seconds), label: `sekund${time.seconds !== 1 ? "er" : ""}` }
		];
</script>

{#if time === null}
	<div class="text-center text-white">
		<p class="font-bold text-xl">CTFen er live NÅ</p>
		<p class="text-sm mt-2">🚩 onsdag 1. april 2026 kl. 19:00</p>
	</div>
{:else}
	<div class="flex flex-col items-center gap-3 text-white text-center">
		<p>CTFen starter om</p>

		<div class="flex gap-4 font-bold">
			{#each units() as unit}
				<div class="flex flex-col items-center">
					<span class="text-3xl sm:text-3xl">{unit.value}</span>
					<span class="text-xs opacity-80">{unit.label}</span>
				</div>
			{/each}
		</div>

		<p class="text-lg">
			🚩 onsdag 1. april 2027 kl. 19:00
		</p>
	</div>
{/if}
