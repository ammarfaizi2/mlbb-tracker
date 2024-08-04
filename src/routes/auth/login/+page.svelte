<script lang="ts">
  import type { ActionData, PageServerData } from './$types';
  import LoginForm from '$lib/components/custom/login-form.svelte';
  import { goto } from '$app/navigation';
  import { useAuth } from '$lib/stores/authStore';

  export let data: PageServerData;
  export let form: ActionData;

  $: if (form?.success) {
    useAuth.set(true);
    goto('/auth/otp');
  }
</script>

<LoginForm data={data.form} />
