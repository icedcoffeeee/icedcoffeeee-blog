<script lang="ts">
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>{config.title}</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Slackside+One&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="relative w-screen min-h-[100lvh] -m-3 bg-black">
	<img
		src="library.jpg"
		alt="library"
		class="object-cover object-left md:object-center w-[100lvw] h-[100lvh] blur-sm"
	/>
	<img
		src="library.jpg"
		alt="library"
		class="absolute top-0 object-cover object-left md:object-center w-[100lvw] h-[100lvh] mask"
	/>
	<div class="absolute top-0 right-0 flex flex-col items-end w-full h-full p-5">
		<nav class="flex gap-5 text-lg">
			<a href="/">About</a>
			<a href="/">Blog</a>
			<a href="/">Projects</a>
		</nav>
		<div class="flex flex-col justify-end md:justify-center items-end w-full h-full">
			<img src="name.svg" alt="Hazim Saharuddin" class="w-1/2 drop-shadow-lg" />
			<h1>Hazim Saharuddin</h1>
		</div>
	</div>
</div>

<style lang="postcss">
	* {
		font-family: 'Cascadia Mono', sans-serif;
		color: white;
		@apply drop-shadow-lg;
	}
	h1 {
		font-size: 2rem;
	}
	.mask {
		mask-image: linear-gradient(to bottom, transparent 10%, black, transparent 90%);
	}
	@media (min-width: 768px) {
		.mask {
			mask-image: linear-gradient(to right, black, transparent 50%);
		}
	}
</style>
