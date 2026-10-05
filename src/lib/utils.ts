/** Prefix a root-relative path with the configured base path. */
export function u(path: string) {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/** One real sentence that carries every source link inside it (no label or list style). */
export function sourceSentence(sources: { label: string; url: string }[]) {
  const links = sources.map((s) => {
    const text = s.label.replace(/\s*\([^)]*\)\s*$/, '').replace(/:\s+/, ' ');
    return `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">${esc(text)}</a>`;
  });
  const list = links.length === 1 ? links[0] : `${links.slice(0, -1).join(', ')} and ${links[links.length - 1]}`;
  return `The background on this page comes from ${list}.`;
}

const LINKED_PHRASES: [string, string][] = [
  ['the city Building Codes page', 'https://www.ottawaks.gov/205/Building-Codes'],
  ['the Building Codes page', 'https://www.ottawaks.gov/205/Building-Codes'],
];

/** Turn known phrases inside a plain sentence into new-tab links. */
export function linkify(text: string) {
  let out = esc(text);
  for (const [phrase, url] of LINKED_PHRASES) {
    out = out.replace(phrase, `<a href="${url}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">${phrase}</a>`);
  }
  return out;
}
