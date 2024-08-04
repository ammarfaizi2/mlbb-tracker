<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar';
  import { Button } from '$lib/components/ui/button';
  import Winrate from './winrate.svelte';

  let showId: boolean = false;
</script>

<div class="relative flex w-full overflow-hidden rounded-lg">
  <img
    src="/images/background.webp"
    alt="Profile Card"
    class="absolute left-0 top-0 brightness-[30%]"
  />
  <div class="absolute left-0 top-0 z-[1] h-full w-full" />
  <div class="z-[2] w-full">
    <div class="flex gap-x-5 px-10 py-9">
      <Avatar.Root class="h-28 w-28">
        <Avatar.Image
          class="mask mask-image"
          src="https://akmpicture.youngjoygame.com/dist/face/2091/8/10/57241008_96_new_3b501042-8718-4dad-ad54-b084e7de80a2.jpg"
          alt="@rushkii"
          draggable="false"
        />
        <Avatar.Fallback>YLIJ</Avatar.Fallback>
      </Avatar.Root>
      <div class="flex flex-col py-2">
        <div class="mb-2 font-beaufort-bold text-4xl tracking-widest">Your Lie In June</div>
        <div class="font-spiegel-semibold text-lg uppercase">
          <span class="pr-1">ID: </span>
          <span>
            <Button
              variant={showId ? 'ghost' : 'secondary'}
              class="h-auto gap-x-1 px-2 py-1"
              on:click={() => (showId = !showId)}
            >
              <span class="transition duration-200 {showId ? 'opacity-100' : 'opacity-0'}">
                57241008
              </span>
              <span class="transition duration-200 {showId ? 'opacity-100' : 'opacity-0'}">
                (2091)
              </span>
            </Button>
          </span>
        </div>
      </div>
    </div>
    <div class="flex justify-between bg-neutral-950/90 px-10 py-7">
      <div>
        <h1 class="mb-5 font-beaufort-bold text-3xl uppercase">Overview</h1>
        <Winrate matches={7093} winrate={70.3} mvp={3123} />
      </div>
      <div>Made by Kiizuha</div>
    </div>
  </div>
</div>

<style>
  :global(.mask) {
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
  }

  :global(.mask-image) {
    -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==);
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==);
  }
</style>
