<script>
  import '../app.css';
  import '../font.css';
</script>

<main class="relative min-h-screen w-full">
  <div>
    <img
      src="/images/background.webp"
      alt="Site Background"
      class="h-screen w-screen object-cover brightness-[30%] blur-[2px]"
    />
  </div>
  <div class="absolute left-0 top-0 min-h-screen w-full bg-black/50 text-white px-10 py-8">
    <slot />
  </div>
</main>
