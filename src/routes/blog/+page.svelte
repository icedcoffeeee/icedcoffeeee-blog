<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Rss } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { posts, tag_colors } = data;
</script>

<svelte:head>
	<title>Blog | Hazim Saharuddin</title>
	<meta name="description" content="Physicist, developer, and leader." />
</svelte:head>

<div class="flex justify-between items-center">
	<h1 class="text-xl mb-3">Blog Posts</h1>
	<a href="/rss.xml"><Rss size="1rem" /></a>
</div>
<div class="flex flex-col gap-2">
	{#each posts as post}
		<a href="blog/{post.slug}" class="border-t border-t-neutral-700">
			<h3 class="text-md">{post.title}</h3>
			<span class="text-sm flex justify-between">
				<p class="text text-neutral-500">{formatDate(post.date.toString())}</p>
				<span class="flex gap-1">
					{#each post.tags as tag}
						<span class="rounded-full px-2" style="background-color:{tag_colors[tag]}">{tag}</span>
					{/each}
				</span>
			</span>
		</a>
	{/each}
</div>
