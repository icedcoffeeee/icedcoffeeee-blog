import type { Post } from '$lib/types';
import { error, type LoadEvent } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

export async function load({ params }: LoadEvent) {
	try {
		const post: { default: SvelteComponent; metadata: Post } = await import(
			`../../../posts/${params.slug}.md`
		);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
