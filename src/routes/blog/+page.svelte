<script lang="ts">
	import { page } from '$app/stores';
	import { formatDate } from '$lib/utils';
	import type { Post } from '$lib/types';

	const posts: Post[] = $page.data.posts;
</script>

<svelte:head>
	<title>Blog | Hazim Saharuddin</title>
	<meta name="description" content="Physicist, developer, and leader." />
</svelte:head>

<h1 class="text-xl mb-3">Blog Posts</h1>
<div class="flex flex-col">
	{#each posts as post}
		<a href="blog/{post.slug}">
			<h3 class="text-md">{post.title}</h3>
			<p class="text text-neutral-500">{formatDate(post.date.toString())}</p>
		</a>
	{/each}
</div>
