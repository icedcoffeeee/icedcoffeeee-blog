import TWcolors from 'tailwindcss/colors';
import type { Post } from '$lib/types';
import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load({ fetch }: ServerLoadEvent) {
  const response = await fetch('api/posts');
  const posts: Post[] = await response.json();
  const tags = posts
    .map((v) => v.tags)
    .reduce((prev, curr) => {
      curr.forEach((v) => {
        if (!prev.includes(v)) prev.push(v);
      });
      return prev;
    }, [])
    .reverse();
  const colors = Object.keys(TWcolors) as (keyof typeof TWcolors)[];
  const tag_colors = Object.fromEntries(tags.map((v, i) => [v, TWcolors[colors[10 + i]][500]]));
  return { posts, tag_colors };
}
