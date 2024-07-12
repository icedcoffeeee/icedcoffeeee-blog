<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';

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
</script>

<nav class="mb-5 pr-5 w-full flex justify-end gap-5 md:text-2xl font-['Slackside_One',_sans-serif]">
	<a href="/">Home</a>
	<a href="/cv">CV</a>
	<a href="/blog">Blog</a>
</nav>

<slot />

<style lang="postcss">
	a {
		@apply decoration-neutral-50 hover:underline;
	}
</style>
