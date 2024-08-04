<script lang="ts">
  import Separator from '$lib/components/ui/separator/separator.svelte';

  export let matches: number,
    winrate: number,
    mvp: number

  const splitByComma = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
</script>

<div class="flex items-center space-x-4 text-center text-sm uppercase">
  <div>
    <div class=" font-beaufort-bold text-xl text-yellow-500">{splitByComma(matches)}</div>
    <div class="text-sm text-neutral-400">Matches</div>
  </div>
  <Separator orientation="vertical" class="h-6 w-0.5" />
  <div>
    <div class=" font-beaufort-bold text-xl text-yellow-500">{winrate}%</div>
    <div class="text-sm text-neutral-400">Winrate(s)</div>
  </div>
  <Separator orientation="vertical" class="h-6 w-0.5" />
  <div>
    <div class=" font-beaufort-bold text-xl text-yellow-500">{mvp}</div>
    <div class="text-sm text-neutral-400">MVP</div>
  </div>
</div>
