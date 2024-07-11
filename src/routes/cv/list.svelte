<script lang="ts">
	export let title: string = 'Test';
	export let date: (number | null)[] = [2021, 2022];
	export let location: string = 'test';
	export let lists: string[] = ['one', 'two'];
</script>

<h3 class="mt-5 text-lg">{title}</h3>
<span class="flex justify-between">
	<p class="text-neutral-500 w-[50%] md:w-auto">
		({date.map((v) => (v === null ? 'Present' : v)).join(' — ')})
	</p>
	<p class="text-right italic">{location}</p>
</span>
<ul class="ml-5 list-disc text-neutral-300">
	{#each lists as list}
		<li>{list}</li>
	{/each}
</ul>

<style lang="postcss">
	p {
		@apply text-sm;
	}
</style>
