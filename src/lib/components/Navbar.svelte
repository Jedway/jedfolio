<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<nav class="fixed top-0 w-full bg-gruvbox-bg0-h hidden md:block border-b border-gruvbox-bg3 z-50">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <Link to="/" class="font-bold text-xl text-gruvbox-orange">Jedfolio</Link>
      <div class="flex space-x-6">
        <Link to="/" class="text-gruvbox-fg4 hover:text-gruvbox-fg">Home</Link>
        <Link to="/about" class="text-gruvbox-fg4 hover:text-gruvbox-fg">About</Link>
        <Link to="/projects" class="text-gruvbox-fg4 hover:text-gruvbox-fg">Projects</Link>
        <Link to="/blog" class="text-gruvbox-fg4 hover:text-gruvbox-fg">Blog</Link>
        <Link to="/contact" class="text-gruvbox-fg4 hover:text-gruvbox-fg">Contact</Link>
      </div>
    </div>
  </div>
</nav>