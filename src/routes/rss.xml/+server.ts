import RSS from 'rss';
import type { Post } from '$lib/types';
import { dev } from '$app/environment';

const URL = dev ? 'http://localhost:5173' : 'https://icedcoffeeee.vercel.app';

const feed = new RSS({
	title: 'Hazim Saharuddin | Blog',
	description: 'Personal rants about physics or software',
	site_url: URL,
	feed_url: URL + '/rss',
	copyright: '2024 Hazim Saharuddin',
	language: 'en'
});

export async function GET() {
	const posts: Post[] = await fetch(URL + '/api/posts').then((r) => r.json());
	posts.forEach((post) => {
		feed.item({
			title: post.title,
			description: '',
			url: URL + '/blog/' + post.slug,
			date: post.date
		});
	});
	return new Response(feed.xml());
}
