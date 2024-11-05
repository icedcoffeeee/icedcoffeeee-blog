<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Rss } from 'lucide-svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const { posts, tag_colors } = data;
</script>

<svelte:head>
	<title>Blog | Hazim Saharuddin</title>
	<meta name="description" content="Physicist, developer, and leader." />
</svelte:head>

<div class="flex justify-between items-center">
	<h1 class="font-mono mb-3">Blog Posts</h1>
	<a href="/rss.xml"><Rss size="1rem" /></a>
</div>
<div class="flex flex-col gap-2">
	{#each posts as post}
		<a href="blog/{post.slug}" class="border-t border-t-neutral-700">
			<h3>{post.title}</h3>
			<span class="flex justify-between items-center text-sm">
				<p class="text-neutral-500">{formatDate(post.date.toString())}</p>
				<span class="flex gap-1">
					{#each post.tags as tag}
						<span class="font-mono rounded-sm px-1" style="background-color:{tag_colors[tag]}"
							>{tag}</span
						>
					{/each}
				</span>
			</span>
		</a>
	{/each}
</div>
