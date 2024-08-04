import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch }) => {
  const res = await fetch('https://sg-api.mobilelegends.com/base/getBaseInfo');
  return json(await res.json());
}) satisfies RequestHandler;
