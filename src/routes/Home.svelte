<script lang="ts">
  import PageTransition from '../lib/components/PageTransition.svelte';
  import Typewriter from '../lib/components/Typewriter.svelte';
</script>

<PageTransition>
  <div class="flex flex-col items-center justify-center min-h-[80vh] text-center">
    <h1 class="text-5xl font-bold mb-6 text-gruvbox-fg heading-depth">
      <Typewriter text="Hello👋🏽, I'm Jed" />
    </h1>
    <p class="text-xl mb-8 max-w-2xl text-gruvbox-fg4">Full-stack developer specializing in backend solutions for web services. 
      Currently focused on building blockchain products on Solana and exploring 🦀Rust's diverse use cases.
    </p>
    <div class="flex gap-4">
      <a href="/cv.pdf" download class="bg-gruvbox-orange text-gruvbox-bg0 px-6 py-3 rounded-lg button-depth">
        Download CV
      </a>
      <a href="/contact" class="border border-gruvbox-fg4 text-gruvbox-fg4 px-6 py-3 rounded-lg button-depth hover:bg-gruvbox-fg4 hover:text-gruvbox-bg0">
        Get in Touch
      </a>
    </div>
  </div>
</PageTransition>