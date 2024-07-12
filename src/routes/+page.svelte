<script lang="ts">
	import Name from './name.svelte';
</script>

<svelte:head>
	<title>Hazim Saharuddin</title>
	<meta name="description" content="Physicist, developer, and leader." />
</svelte:head>

<div class="h-[87lvh] md:h-[80lvh] flex flex-col justify-end md:justify-center gap-2">
	<p class="md:text-xl">Hi, my name is</p>
	<Name class="w-[80%] md:w-[50%] h-fit" />
	<p class="md:text-xl">A physicist, mentor, developer, designer, and leader.</p>
	<div class="mt-3 flex gap-3">
		<a href="/about" class="bg-neutral-50 text-neutral-900">About Me</a>
		<a href="/blog">Blog</a>
	</div>
</div>

<img class="hero-image" src="/library.jpg" alt="Hazim Saharuddin" />

<style lang="postcss">
	a {
		@apply w-28 py-1 border border-neutral-50 rounded-md flex justify-center items-center;
	}
	.hero-image {
		@apply -z-10 absolute top-0 right-0 w-full h-auto md:w-auto md:h-full object-contain object-center;
		mask-image: linear-gradient(to bottom, transparent, black 50%);
	}
</style>
