import type { Show } from './types'

export function filterShows(genres: string[], rating: string | undefined, data: Show[]) {
  let temp = [...data]
  if (rating) {
    const numberRating = Number(rating.replace('+', '').trim())
    temp = temp.filter((item: Show) => item.rating.average >= numberRating)
  }
  if (genres.length) {
    temp = temp.filter((item: Show) => item.genres.some((item: string) => genres.includes(item)))
  }
  return temp
}
