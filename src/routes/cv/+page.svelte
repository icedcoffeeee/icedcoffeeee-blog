<script lang="ts">
	import resume, { specials } from './resume';
	import List from './list.svelte';
	import InfoCard from './infocard.svelte';

	type Specials = keyof typeof specials;
	const keys = Object.keys(specials) as Specials[];
	const specializations: [Specials, string][] = keys.map((k: Specials) => [k, specials[k]]);
</script>

<svelte:head>
	<title>CV | Hazim Saharuddin</title>
	<meta name="description" content="My work in one page." />
</svelte:head>

<div class="h-fit grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20">
	<section>
		<InfoCard />
		<div class="mt-5 md:block hidden">
			<h2>Skills and Specialization</h2>
			<div class="mt-5 grid grid-cols-4 md:grid-cols-3 gap-y-3">
				{#each specializations as [keys, vals]}
					<p class="text-transparent bg-red-500 bg-clip-text">{keys}</p>
					<p class="col-span-3 md:col-span-2">{vals}</p>
				{/each}
			</div>
		</div>
	</section>
	<section>
		<div>
			<h2>Projects</h2>
			{#each resume.projects as project}
				<List {...project} />
			{/each}
		</div>
	</section>
	<div>
		<h2>Experience</h2>
		{#each resume.experience as xp}
			<List {...xp} />
		{/each}
	</div>
	<section>
		<div class="md:hidden">
			<h2>Skills and Specialization</h2>
			<div class="mt-5 grid grid-cols-4 md:grid-cols-3 gap-y-3">
				{#each specializations as [keys, vals]}
					<p class="text-transparent bg-red-500 bg-clip-text">{keys}</p>
					<p class="col-span-3 md:col-span-2">{vals}</p>
				{/each}
			</div>
		</div>
	</section>
</div>

<style lang="postcss">
	h2 {
		@apply text-xl bg-gradient-to-r from-blue-500 to-violet-900 bg-clip-text text-transparent;
		font-family: 'Silkscreen', sans-serif;
	}
	p {
		@apply text-sm;
	}
	section {
		@apply space-y-5;
	}
</style>
