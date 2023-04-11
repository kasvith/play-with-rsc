import ky from 'ky'

let cache = new Map();

export function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, ky(url).then((res: any) => res.json()));
  }
  return cache.get(url);
}