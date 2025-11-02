<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";

  const { title, ...props }: HTMLImgAttributes = $props();
  const attrs = title?.split(",") ?? [];
  const right = attrs.includes("right");
  const half = attrs.includes("half");
</script>

<div
  class="relative my-6 flex justify-center md:-mb-4 md:-translate-y-12"
>
  <img
    {...props}
    class="rounded transition-all -z-10 hover:rotate-1
      md:absolute md:w-1/3
      {half ? 'w-1/2' : 'w-full'}
      {right ? 'md:left-[calc(100%+1rem)]' : 'md:right-[calc(100%+1rem)]'}"
  />
</div>
