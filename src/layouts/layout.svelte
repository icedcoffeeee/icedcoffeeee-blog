<script lang="ts" module>
  import img from "./image.svelte";

  export { img };
</script>

<script lang="ts">
  const { children } = $props();
</script>

<div
  class="prose
  mb-6 w-2xl
  prose-invert
  md:mb-0

  prose-p:my-4

  prose-p:leading-6
  prose-a:underline-offset-4
  prose-li:my-0 prose-img:my-0
  "
>
  {@render children()}
</div>
