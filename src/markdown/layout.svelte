<script lang="ts" module>
  import img from "./image.svelte";

  export { img };
</script>

<script lang="ts">
  const { children } = $props();
</script>

{@render children()}
