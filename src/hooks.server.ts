import { parseJwt } from '$lib/utils';
import type { Handle, HandleFetch } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const { headers } = event.request;
  const authorization = headers.get('authorization');

  if (authorization) {
    const token = authorization.replace('Bearer ', '');

    try {
      const data = parseJwt(token);
      event.locals.user = data.Ext;
    } catch {
      console.log('error JWT');
    }
  }

  return await resolve(event);
}) satisfies Handle;

export const handleFetch = (async ({ event, request, fetch }) => {
  if (event.url.pathname.startsWith('/api/auth')) return await fetch(request.url);

  if (request.url.includes('mobilelegends.com')) {
    const token = '';

    const modified = new Request(request, {
      ...request,
      method: 'POST',
      headers: {
        authorization: token,
        'x-token': token
      }
    });
    return await fetch(modified);
  }

  return await fetch(request);
}) satisfies HandleFetch;
