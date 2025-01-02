<script lang="ts">
  import PageTransition from '../lib/components/PageTransition.svelte';
  import Typewriter from '../lib/components/Typewriter.svelte';
</script>

<PageTransition>
  <h1 class="text-4xl font-bold mb-8 text-gruvbox-fg heading-depth">
    <Typewriter text="About Me" />
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <p class="mb-4 text-gruvbox-fg4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p class="mb-4 text-gruvbox-fg4">
        [Your experience] Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-gruvbox-fg heading-depth">Skills</h2>
      <ul class="list-disc list-inside space-y-2 text-gruvbox-fg4">
        <li>JavaScript/TypeScript</li>
        <li>React/Svelte</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
      </ul>
    </div>
    <div>
      <img src="your-image.jpg" alt="Profile" class="rounded-lg w-full" />
    </div>
  </div>
</PageTransition>