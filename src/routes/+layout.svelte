<script lang="ts">
	import '../app.css';
</script>

<nav class="mb-5 pr-5 w-full flex justify-end gap-5 md:text-2xl font-['Slackside_One',_sans-serif]">
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/cv">CV</a>
	<a href="/blog">Blog</a>
</nav>

<slot />

<style lang="postcss">
	a {
		@apply decoration-neutral-50 hover:underline;
	}
</style>
