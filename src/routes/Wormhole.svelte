<script lang="ts">
  import { EllipseCurve, Group, Line, Vector2, Vector3 } from "three";
  import { T, useTask, type Props } from "@threlte/core";
  type LineProps = Props<typeof Line>;

  let { loaded = $bindable(false) } = $props();
  let group = $state<Group>();

  useTask((delta) => {
    if (!group) return;
    group.rotation.z += 0.1 * delta;
    group.rotation.y = 0.4;
  });

  const N = 40;
  const z_ = Array(N + 1)
    .fill(0)
    .map((_, i) => ((i / N) * 2 - 1) * 2);
  const r_ = (z: number) => Math.pow(z, 4) + 0.05;
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, -2, 2]}
  oncreate={(ref) => {
    ref.lookAt(new Vector3(0, 0, 0));
    loaded = true;
  }}
></T.PerspectiveCamera>

{#snippet LineF(points: Vector2[] | Vector3[], p: LineProps)}
  <T.Line
    {...p}
    oncreate={(ref) => {
      ref.geometry.setFromPoints(points);
    }}
  >
    <T.BufferGeometry></T.BufferGeometry>
    <T.LineBasicMaterial opacity={0.5} transparent></T.LineBasicMaterial>
  </T.Line>
{/snippet}

{#snippet Circle(radius: number, p: LineProps)}
  {@render LineF(new EllipseCurve(0, 0, radius, radius).getPoints(100), p)}
{/snippet}

<T.Group bind:ref={group} scale={0.5}>
  {#each z_ as z, i}
    {@render Circle(r_(z), { position: [0, 0, z] })}
    {@render LineF(
      z_.map((z) => new Vector3(r_(z), 0, z)),
      { rotation: [0, 0, (i / N) * 2 * Math.PI] },
    )}
  {/each}
</T.Group>
