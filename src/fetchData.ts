import axios from 'axios'

let cache = new Map();

export function fetchData(url: string) {
  if (!cache.has(url)) {
    if (import.meta.env.SSR) {
      console.log('fetching data from server');
      cache.set(url, axios.get(url).then((res: any) => res.data));
      return cache.get(url);
    }
    cache.set(url, fetch(url).then((res: any) => res.json()));
  }
  return cache.get(url);
}