<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <div
    transition:fade={{ delay: 200, duration: 300, y: 20 }}
    class="w-full max-w-5xl mx-auto"
  >
    <slot />
  </div>
{/if}