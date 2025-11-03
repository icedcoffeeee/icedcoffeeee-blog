<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Wormhole from "./Wormhole.svelte";
  let loaded = false;
</script>

<div class="fullscreen pointer-events-none grid">
  <div
    data-loaded={loaded}
    class="fixed top-0 left-0 -z-1 h-screen w-screen opacity-0
    transition-all duration-1000 data-[loaded='true']:opacity-100
    [mask-image:linear-gradient(to_bottom,_transparent,_white,_transparent)]
    "
  >
    <Canvas>
      <Wormhole bind:loaded></Wormhole>
    </Canvas>
  </div>
  <div>
    <h1>Hazim Saharuddin</h1>
    <h2>Physicist, Developer, Educator.</h2>
  </div>

  <p class="max-w-sm place-self-end text-right italic">
    "There are two worlds we live in: a material world, bound by the laws of physics, and the world
    inside our mind, which is just as important."
    <br />
    &mdash; A. Moore
  </p>
</div>
