<script lang="ts">
  import PageTransition from '../lib/components/PageTransition.svelte';

  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      github: "https://github.com/yourusername/project1",
      image: "project1.jpg",
      tags: ["React", "Node.js", "MongoDB"]
    },
  ];
</script>

<PageTransition>
  <h1 class="text-4xl font-bold mb-8 text-gruvbox-fg heading-depth">Projects</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each projects as project}
      <div class="border border-gruvbox-bg3 bg-gruvbox-bg1 rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2 text-gruvbox-fg heading-depth">{project.title}</h3>
          <p class="mb-4 text-gruvbox-fg4">{project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tags as tag}
              <span class="px-3 py-1 bg-gruvbox-bg2 text-gruvbox-fg4 rounded-full text-sm">
                {tag}
              </span>
            {/each}
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center text-gruvbox-blue hover:underline">
            View on GitHub
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    {/each}
  </div>
</PageTransition>