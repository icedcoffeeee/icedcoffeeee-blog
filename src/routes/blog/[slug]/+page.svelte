<script lang="ts">
	import 'katex/dist/katex.min.css';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title} | Hazim Saharuddin</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose prose-invert max-w-max text-neutral-50 overflow-x-hidden">
	<h1>{data.meta.title}</h1>
	<span class="text-neutral-500">Published on {formatDate(data.meta.date)}</span>
	<div class="space-x-3">
		{#each data.meta.tags as tag}
			<a
				href="blog?tag={tag}"
				class="px-2 py-0.5 rounded-full bg-blue-500 text-sm text-white no-underline"
			>
				{tag}
			</a>
		{/each}
	</div>

	<svelte:component this={data.content} />
</article>
