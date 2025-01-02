<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<nav class="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md md:hidden z-50">
  <div class="grid grid-cols-5 h-16 bg-gruvbox-bg0-h rounded-full border border-gruvbox-bg3 shadow-lg backdrop-blur-sm">
    <Link to="/" class="flex flex-col items-center justify-center text-gruvbox-fg4 hover:text-gruvbox-fg">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span class="text-[10px] mt-0.5">Home</span>
    </Link>
    <Link to="/about" class="flex flex-col items-center justify-center text-gruvbox-fg4 hover:text-gruvbox-fg">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span class="text-[10px] mt-0.5">About</span>
    </Link>
    <Link to="/projects" class="flex flex-col items-center justify-center text-gruvbox-fg4 hover:text-gruvbox-fg">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
      <span class="text-[10px] mt-0.5">Projects</span>
    </Link>
    <Link to="/blog" class="flex flex-col items-center justify-center text-gruvbox-fg4 hover:text-gruvbox-fg">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
      </svg>
      <span class="text-[10px] mt-0.5">Blog</span>
    </Link>
    <Link to="/contact" class="flex flex-col items-center justify-center text-gruvbox-fg4 hover:text-gruvbox-fg">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span class="text-[10px] mt-0.5">Contact</span>
    </Link>
  </div>
</nav>