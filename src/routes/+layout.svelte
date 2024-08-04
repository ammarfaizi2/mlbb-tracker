<script>
  import '../app.css';
  import '../font.css';
</script>

<main class="relative min-h-screen w-full">
  <img
    src="/images/background.webp"
    alt="Site Background"
    class="h-screen w-screen object-cover brightness-[30%]"
  />
  <div class="absolute left-0 top-0 z-[1] h-screen w-screen object-cover backdrop-blur-[.1vw]" />
  <div
    class="absolute left-0 top-0 z-[2] min-h-screen w-full bg-black/70 font-spiegel-regular text-white"
  >
    <div class="container px-10 py-8">
      <slot />
    </div>
  </div>
</main>
