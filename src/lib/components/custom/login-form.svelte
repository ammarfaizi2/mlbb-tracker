<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { loginSchema, type LoginSchema } from '$lib/schemas';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  export let data: SuperValidated<Infer<LoginSchema>>;

  const form = superForm(data, {
    validators: zodClient(loginSchema),
    resetForm: false,
    delayMs: 0
  });

  const { form: formData, enhance, delayed, allErrors } = form;
</script>

<div class="flex h-full w-full items-center justify-center">
  <Card.Root class="w-[30rem] p-6">
    <Card.Header class="mb-10 gap-y-2 p-0 text-center">
      <Card.Title class="font-beaufort-bold text-5xl uppercase">Login</Card.Title>
      <Card.Description class="text-base">Login to show your detailed profile</Card.Description>
    </Card.Header>

    <form method="POST" use:enhance>
      <Card.Content>
        <div class="flex items-center gap-x-2">
          <div class="w-full">
            <Form.Field {form} name="roleId">
              <Form.Control let:attrs>
                <Form.Label>Game ID</Form.Label>
                <Input {...attrs} bind:value={$formData.roleId} placeholder="Your Game ID" />
              </Form.Control>
            </Form.Field>
          </div>

          <div>
            <Form.Field {form} name="zoneId">
              <Form.Control let:attrs>
                <Form.Label>Server ID</Form.Label>
                <Input {...attrs} bind:value={$formData.zoneId} placeholder="Your Server ID" />
              </Form.Control>
            </Form.Field>
          </div>
        </div>

        <div class="pt-3">
          <ul class="space-y-1 text-sm text-red-500">
            {#each $allErrors as err}
              {#each err.messages as msg}
                <li class="list-inside list-disc">{msg}</li>
              {/each}
            {/each}
          </ul>
        </div>
      </Card.Content>

      <div class="flex items-center justify-center gap-x-2">
        <Form.Button
          class="relative w-40"
          disabled={($formData.roleId.length === 0 && $formData.zoneId.length === 0) || $delayed}
        >
          <div class="w-full text-center">Submit</div>
          {#if $delayed}
            <svg
              class="absolute right-2 h-5 w-5 animate-spin text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-100"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          {/if}
        </Form.Button>
      </div>
    </form>
  </Card.Root>
</div>
