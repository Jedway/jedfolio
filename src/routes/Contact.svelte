<script lang="ts">
  import PageTransition from '../lib/components/PageTransition.svelte';
  import Typewriter from '../lib/components/Typewriter.svelte';

  let formData = {
    name: '',
    email: '',
    message: ''
  };

  function handleSubmit() {
    console.log('Form submitted:', formData);
  }
</script>

<PageTransition>
  <h1 class="text-4xl font-bold mb-8 text-gruvbox-fg heading-depth">
    <Typewriter text="Contact Me" />
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <p class="mb-4 text-gruvbox-fg4">
        I'm always interested in hearing about new projects and opportunities. 
        Feel free to get in touch!
      </p>
      <div class="space-y-4">
        <div class="flex items-center text-gruvbox-fg4">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
        <div class="flex items-center text-gruvbox-fg4">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
      <div>
        <label for="name" class="block mb-2 text-gruvbox-fg4">Name</label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          class="w-full px-4 py-2 bg-gruvbox-bg1 border border-gruvbox-bg3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gruvbox-blue text-gruvbox-fg"
          required
        />
      </div>
      <div>
        <label for="email" class="block mb-2 text-gruvbox-fg4">Email</label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          class="w-full px-4 py-2 bg-gruvbox-bg1 border border-gruvbox-bg3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gruvbox-blue text-gruvbox-fg"
          required
        />
      </div>
      <div>
        <label for="message" class="block mb-2 text-gruvbox-fg4">Message</label>
        <textarea
          id="message"
          bind:value={formData.message}
          rows="4"
          class="w-full px-4 py-2 bg-gruvbox-bg1 border border-gruvbox-bg3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gruvbox-blue text-gruvbox-fg"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-gruvbox-orange text-gruvbox-bg0 px-6 py-3 rounded-lg button-depth"
      >
        Send Message
      </button>
    </form>
  </div>
</PageTransition>