import { useHttp } from '$lib/http';

export const getHeroWinrateAcccount = async () => {
  const data = useHttp({
    url: 'https://api.gms.moontontech.com/api/gms/source/2669606/2674710',
    variables: {
      pageSize: 20,
      filters: [],
      sorts: [],
      pageIndex: 1,
      params: {}
    },
  });
  return data;
};
