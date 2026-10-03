/**
 * Serve images from /public/img through the Netlify Image CDN so visitors get a
 * resized WebP instead of the full-resolution original.
 */
export function img(file: string, width = 1200) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=75`
}

/** A responsive srcSet for the given widths. */
export function srcSet(file: string, widths: number[] = [480, 800, 1200, 1800]) {
  return widths.map((w) => `${img(file, w)} ${w}w`).join(', ')
}
