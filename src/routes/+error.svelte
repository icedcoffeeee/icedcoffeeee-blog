<script>
  import { page } from "$app/state";
</script>

<div class="fullscreen flex flex-col items-center justify-center font-mono">
  <h1>{page.status}</h1>
  <p>{page.error?.message}</p>
</div>
