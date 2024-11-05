<script lang="ts">
	import '../app.css';
	import { logo } from '$lib/utils';
	import { onNavigate } from '$app/navigation';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	onNavigate(function (nav) {
		///@ts-ignore
		if (!document.startViewTransition) return;
		return new Promise((res) =>
			///@ts-ignore
			document.startViewTransition(async function () {
				res();
				await nav.complete;
			})
		);
	});

	const fonts = ['EB Garamond', 'JetBrains Mono'];
	const headerFont = fonts.map((f) => 'family=' + f.replaceAll(' ', '+')).join('&');
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?{headerFont}&display=swap" rel="stylesheet" />
</svelte:head>

<div class="font-serif text-xl md:text-2xl">
	<nav class="mb-5 w-full flex items-center justify-between gap-5 font-mono">
		<div class="h-full flex gap-4 md:scale-110">
			<a target="_blank" href="https://x.com/_hazym">
				<img height="14" width="14" src={logo('x')} alt="x social account" />
			</a>
			<a target="_blank" href="https://github.com/icedcoffeeee">
				<img height="14" width="14" src={logo('github')} alt="github account" />
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/ilmi-hazim-saharuddin-a6369025a/">
				<img height="14" width="14" src={logo('linkedin')} alt="github account" />
			</a>
		</div>
		<div class="flex gap-5">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/blog">Blog</a>
		</div>
	</nav>

	{@render children?.()}
</div>

<style lang="postcss">
	a {
		@apply decoration-neutral-50 hover:underline;
	}
</style>
