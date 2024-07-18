<script lang="ts">
	import me from '$lib/assets/me.jpg';
</script>

<div class="flex items-center gap-2 p-2 border border-neutral-50/10 rounded">
	<img src={me} alt="Hazim Saharuddin" class="w-[30%] rounded object-cover" />
	<div class="w-full flex flex-col">
		<h1>Ilmi Hazim bin Saharuddin</h1>
		<p>BSc. Physics</p>
		<p>Based in Kuala Lumpur, Malaysia</p>
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-xl;
	}
	p {
		@apply text-sm;
	}
</style>
