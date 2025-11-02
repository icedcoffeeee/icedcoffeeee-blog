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
    {@render children()}
  </div>
{/if}
