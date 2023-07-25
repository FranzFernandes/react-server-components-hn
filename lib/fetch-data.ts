import 'server-only';

export default async function fetchData(type: string) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${type}.json`,
    {
      cache: 'no-store',
      next: {
        revalidate: 0,
      }
    }
  )
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return res.json()
}