<script lang="ts">
  import { Menu, X } from "lucide-svelte";

  let bar = $state(false);
  let open = () => (bar = true);
  let clos = () => (bar = false);
</script>

{#snippet links()}
  <a href="/" onclick={clos}>/</a>
  <a href="/about" onclick={clos}>about</a>
  <a href="/posts" onclick={clos}>blog</a>
{/snippet}

<nav class="sticky top-0 hidden w-full justify-end gap-20 p-4 font-mono text-sm font-bold md:flex">
  {@render links()}
</nav>

<div class="flex w-full justify-end p-4 md:hidden">
  <button onclick={open}>
    <Menu size={15}></Menu>
  </button>
</div>

<div
  data-open={bar}
  class="sidebar absolute top-0 left-0 flex h-screen w-screen flex-col justify-center gap-4 bg-background/50 p-4 font-mono font-bold backdrop-blur-sm"
>
  <button onclick={clos} class="absolute top-4 right-4 self-end md:hidden">
    <X size={15}></X>
  </button>
  {@render links()}
</div>

<style lang="postcss">
  @reference "../app.css";

  .sidebar {
    @apply transition-all duration-200;

    &[data-open="false"] {
      @apply invisible -translate-y-4 opacity-0;
    }

    &[data-open="true"] {
      @apply visible opacity-100;
    }
  }
</style>
