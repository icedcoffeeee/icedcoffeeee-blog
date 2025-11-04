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
      md:absolute md:w-1/3 2xl:w-1/2
      {half ? 'w-1/2' : 'w-full'}
      {right ? 'md:left-[calc(100%+1rem)]' : 'md:right-[calc(100%+1rem)]'}
      "
  >
    <img {...props} class="rounded" />
    <div class="w-full italic {!right ? 'md:text-right' : ''}">&mdash; {props.alt}</div>
  </div>
</div>
