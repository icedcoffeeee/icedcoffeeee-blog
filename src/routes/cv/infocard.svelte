<script lang="ts">
	import colors from 'tailwindcss/colors';
	const { neutral } = colors;
	const logo = (slug: string) => `https://cdn.simpleicons.org/${slug}/${neutral[50].slice(1)}`;
</script>

<div class="flex gap-2 p-2 border border-neutral-50/10 rounded">
	<img src="/me.jpg" alt="Hazim Saharuddin" class="w-[30%] rounded object-cover" />
	<div class="w-full flex flex-col">
		<h1>Ilmi Hazim bin Saharuddin</h1>
		<p>BSc. Physics</p>
		<p>Based in Kuala Lumpur, Malaysia</p>
		<span class="h-full flex gap-4 items-end mt-2">
			<a href="https://x.com/hazymm_">
				<img height="14" width="14" src={logo('x')} alt="x social account" />
			</a>
			<a href="https://github.com/icedcoffeeee">
				<img height="14" width="14" src={logo('github')} alt="github account" />
			</a>
			<a href="https://www.linkedin.com/in/ilmi-hazim-saharuddin-a6369025a/">
				<img height="14" width="14" src={logo('linkedin')} alt="github account" />
			</a>
		</span>
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
