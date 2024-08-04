<script lang="ts">
  import { ProfileCard, WinrateTab } from '$lib/components/custom';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<div class="space-y-5">
  <ProfileCard {data} />
  <WinrateTab {data} />
</div>
