<script lang="ts">
  import { GithubIcon, LinkedinIcon, Menu, TwitterIcon, X } from "lucide-svelte";

  let bar = $state(false);
  let open = () => (bar = true);
  let close = () => (bar = false);
</script>

{#snippet links()}
  <a href="/" onclick={close}>/</a>
  <a href="/about" onclick={close}>about</a>
  <a href="/posts" onclick={close}>blog</a>
{/snippet}

{#snippet socmed()}
  <div class="flex gap-4">
    <a href="https://github.com/icedcoffeeee">
      <GithubIcon size={15}></GithubIcon>
    </a>
    <a href="https://www.linkedin.com/in/ilmi-hazim-saharuddin-a6369025a">
      <LinkedinIcon size={15}></LinkedinIcon>
    </a>
    <a href="https://x.com/hazymm_">
      <TwitterIcon size={15}></TwitterIcon>
    </a>
  </div>
{/snippet}

<nav
  class="sticky top-0 hidden w-full items-center justify-between gap-20 p-4 font-mono text-sm font-bold md:flex"
>
  {@render socmed()}
  <div class="flex gap-20">
    {@render links()}
  </div>
</nav>

<div
  class="sticky top-0 z-1 flex w-full items-center justify-between bg-background/50 p-4 backdrop-blur-sm md:hidden"
>
  {@render socmed()}
  <button onclick={open}>
    <Menu size={15}></Menu>
  </button>
</div>

<div
  data-open={bar}
  class="sidebar absolute top-0 left-0 z-100 flex h-screen w-screen flex-col justify-center gap-4 bg-background/50 p-4 font-mono font-bold backdrop-blur-sm"
>
  <button onclick={close} class="absolute top-4 right-4 self-end md:hidden">
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
