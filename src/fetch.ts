export default async function fetchAsText(url: string): Promise<string> {
  let resp = await fetch(url)
  return await resp.text()
}
