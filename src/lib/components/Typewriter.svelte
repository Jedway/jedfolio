<script lang="ts">
  export let text: string;
  export let delay: number = 50;
  
  let displayText = '';
  
  $: {
    displayText = '';
    typeText(text);
  }
  
  async function typeText(text: string) {
    for (let i = 0; i <= text.length; i++) {
      displayText = text.slice(0, i);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
</script>

<span class="font-geist">{displayText}<span class="animate-pulse">_</span></span>