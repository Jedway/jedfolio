<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Navbar from "./lib/components/Navbar.svelte";
  import MobileNav from "./lib/components/MobileNav.svelte";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Projects from "./routes/Projects.svelte";
  import Blog from "./routes/Blog.svelte";
  import Contact from "./routes/Contact.svelte";

  export let url = "";
</script>

<Router {url}>
  <div class="font-geist bg-gruvbox-bg0 min-h-screen">
    <Navbar />
    <MobileNav />
    <main class="pt-20 px-4">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </main>
  </div>
</Router>