<script lang="ts">
  import { gotoFilterTag } from "$/lib/index.js";

  const { data } = $props();
</script>

<span>{data.metadata.date}</span>
<h1>{data.metadata.title}</h1>
<span class="-mt-6 flex gap-4">
  {#each data.metadata.tags as tag}
    <button onclick={() => gotoFilterTag(tag)} class="font-normal text-primary no-underline">
      #{tag}
    </button>
  {/each}
</span>

<data.content></data.content>
