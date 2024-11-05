<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex justify-center">
	<div class="w-full max-w-2xl">
		{@render children?.()}
	</div>
</div>
