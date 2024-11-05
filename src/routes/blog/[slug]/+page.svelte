<script lang="ts">
	import 'katex/dist/katex.min.css';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title} | Hazim Saharuddin</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="prose prose-invert md:prose-p:text-xl prose-p:text-xl max-w-max text-neutral-50 overflow-x-hidden text-justify"
>
	<h1 class="text-left">{data.meta.title}</h1>
	<span class="text-neutral-500">Published on {formatDate(data.meta.date.toString())}</span>
	<div class="space-x-3">
		{#each data.meta.tags as tag}
			<span
				class="px-2 py-0.5 rounded-full text-white no-underline"
				style="background-color: {data.tag_colors[tag]};"
			>
				{tag}
			</span>
		{/each}
	</div>

	<data.content />
</article>
