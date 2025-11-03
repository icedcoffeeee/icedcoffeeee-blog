<script lang="ts">
  import twcolors from "tailwindcss/colors";
  import { Dot } from "lucide-svelte";
  import { gotoFilterTag } from "$/lib";

  const { data } = $props();

  const colorsT: { [k: string]: string } = {};
  const colorsB: { [k: string]: string } = {};
  for (let i = 0; i < data.tags.length; i++) {
    // @ts-ignore
    colorsT[data.tags[i]] = twcolors[Object.keys(twcolors)[10 + (i % 8)]][500];
    // @ts-ignore
    colorsB[data.tags[i]] = twcolors[Object.keys(twcolors)[10 + (i % 8)]][700];
  }
</script>

<h1>Posts</h1>
<span class="-mt-4 mb-6 flex flex-wrap gap-2 leading-4">
  <span>Filter/Unfilter:</span>
  {#each data.tags as tag}
    <button
      onclick={() => gotoFilterTag(tag)}
      style="
      {data.tagsC.includes(tag) ? `background-color:${colorsB[tag]};` : ''}
      {!data.tagsC.includes(tag) ? `color:${colorsT[tag]};` : ''}
      "
      class="rounded px-1 no-underline"
    >
      #{tag}
    </button>
  {/each}
</span>

<div class="flex flex-col overflow-scroll md:overflow-visible">
  {#each data.posts as post}
    <a href="/posts/{post.slug}" class="relative border-b border-b-foreground/30 no-underline">
      <span class="line-clamp-1 text-ellipsis">{post.title}</span>
      <span>{post.date}</span>
      <span class="absolute top-0 left-full flex h-full items-center">
        {#each post.tags as tag}
          <span style="color: {colorsT[tag]}; margin-right: -1.5rem;" title={tag}>
            <Dot size={40}></Dot>
          </span>
        {/each}
      </span>
    </a>
  {/each}
</div>

<style lang="postcss">
  @reference "$/app.css";

  a {
    @apply flex justify-between;
  }
</style>
