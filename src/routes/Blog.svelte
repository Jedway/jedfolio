<script lang="ts">
  import PageTransition from '../lib/components/PageTransition.svelte';

  const posts = [
    {
      title: "First Blog Post",
      date: "2024-03-15",
      excerpt: "This is a brief excerpt from the first blog post...",
      slug: "first-blog-post"
    },
  ];
</script>

<PageTransition>
  <h1 class="text-4xl font-bold mb-8 text-gruvbox-fg heading-depth">Blog</h1>
  <div class="space-y-8">
    {#each posts as post}
      <article class="border border-gruvbox-bg3 bg-gruvbox-bg1 rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-2 text-gruvbox-fg heading-depth">{post.title}</h2>
        <time class="text-gruvbox-fg4 mb-4 block">{post.date}</time>
        <p class="mb-4 text-gruvbox-fg4">{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} class="text-gruvbox-blue hover:underline">
          Read more →
        </a>
      </article>
    {/each}
  </div>
</PageTransition>