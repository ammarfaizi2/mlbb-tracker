import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch('/api/hero/winrate');
  if (!res.ok) return { success: false };

  const data = await res.json();
  return {
    success: true,
    ...data.data
  };
};
