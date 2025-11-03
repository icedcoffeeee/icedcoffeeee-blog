<script lang="ts">
  import "$/app.css";
  import favicon from "$lib/assets/favicon.ico";
  import { page } from "$app/state";

  import Navbar from "./Navbar.svelte";

  const { children } = $props();
</script>

<svelte:head>
  <title>icedcoffeeee</title>
  <meta name="description" content="Personal site of Hazim Saharuddin" />
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar></Navbar>

{#if page.route.id === "/"}
  <div class="px-4">
    {@render children()}
  </div>
{:else}
  <div class="flex justify-center px-4">
    <div
      class="prose
      w-full max-w-2xl
      prose-invert
      marker:text-(--tw-prose-body)

      md:mb-0

      prose-p:my-4
      prose-p:leading-6
      prose-a:underline-offset-4
      prose-li:my-0
      prose-img:my-0
      "
    >
      {@render children()}
    </div>
  </div>
{/if}
