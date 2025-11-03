<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";

  const { title, ...props }: HTMLImgAttributes = $props();
  const attrs = title?.split(",") ?? [];
  const right = attrs.includes("right");
  const half = attrs.includes("half");
</script>

<div
  class="relative my-6 flex {right ? 'justify-end' : 'justify-start'} md:-mb-4 md:-translate-y-12"
>
  <div
    class="transition-all hover:rotate-1
      md:absolute md:w-1/4
      {half ? 'w-1/2' : 'w-full'}
      {right ? 'md:left-[calc(100%+1rem)]' : 'md:right-[calc(100%+1rem)]'}
      "
  >
    <img {...props} class="rounded" />
    <span class="italic">&mdash; {props.alt}</span>
  </div>
</div>
