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
        ℹ️ Hi, I'm Jed, a Software Engineering student at <a href="https://topfaith.edu.ng/"><u>Topfaith University</u></a> in Nigeria. 
        I'm passionate about technology and love immersing myself in roguelike games 
        like Dead Cells, Hades, and Blasphemous.
      </p>
      <p class="mb-4 text-gruvbox-fg4">
        📅 I’ve been programming for over 5 years, starting in my high school days (SS2). 
        My journey spans diverse areas of computer science, from e-commerce and enterprise 
        software to even game development.
      </p>
      <p class="mb-4 text-gruvbox-fg4">
        👷🏽‍♂️ I’m currently building blockchain products on <a href="https://solana.com/"><u>Solana</u></a> and exploring the power of AI. 
        I’m a fan of Rust and enjoy building with it. I live in the terminal (Kitty/Zellij/Neovim) and 
        I am a strong advocate for developer efficiency.
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4 text-gruvbox-fg heading-depth">Skills</h2>
      <ul class="list-disc list-inside space-y-2 text-gruvbox-fg4">
        <li>JavaScript/TypeScript</li>
        <li>Svelte/SvelteKit</li>
        <li>Node.js</li>
        <li>Rust</li>
        <li>Python</li>
        <li>Lua</li>
        <li>Bash</li>
        <li>Nix</li>
      </ul>
    </div>
    <div>
      <img src="your-image.jpg" alt="Profile" class="rounded-lg w-full" />
    </div>
  </div>
</PageTransition>