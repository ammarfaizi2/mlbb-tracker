<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs';
  import * as Card from '$lib/components/ui/card';
  import Winrate from './winrate.svelte';
</script>

<Card.Root class="flex !w-max flex-col items-center justify-center p-3">
  <Tabs.Root value="classic" class="w-max">
    <Tabs.List class="grid w-full grid-cols-2">
      <Tabs.Trigger value="classic">Classic</Tabs.Trigger>
      <Tabs.Trigger value="ranked">Ranked</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="classic">
      <Card.Root class="flex flex-col items-center justify-center px-10">
        <Card.Header>
          <Card.Title class="font-beaufort-bold text-3xl uppercase">Classic</Card.Title>
        </Card.Header>
        <Card.Content class="space-y-2">
          <Winrate matches={7093} winrate={70.3} mvp={3123} centered />
        </Card.Content>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="ranked">
      <Card.Root class="flex flex-col items-center justify-center px-10">
        <Card.Header>
          <Card.Title class="font-beaufort-bold text-3xl uppercase">Ranked</Card.Title>
        </Card.Header>
        <Card.Content class="space-y-2">
          <Winrate matches={12321} winrate={89.3} mvp={8032} centered />
        </Card.Content>
      </Card.Root>
    </Tabs.Content>
  </Tabs.Root>
</Card.Root>
