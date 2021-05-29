import { Genres } from 'src/constants/Genres'
import channelList from './channelList.json'

export interface Channel {
  sid: string
  channelNumber: string
  name: string
  /**
   * `sd` - Standard Definition
   * `hd` - High
   * `au` - Audio only
   */
  quality: 'sd' | 'hd' | 'au'
  genre: Genres
}

/**
 * @param genre Optional genre(s) to filter by
 */
export function isValidChannelNumber(channelNumber: string, genre?: Genres | Genres[]) {
  return getAllChannelNumbersArray(genre).includes(channelNumber)
}

/**
 * @param genre Optional genre(s) to filter by
 */
export function getAllChannels(genre?: Genres | Genres[]): Record<string, Channel> {
  const channels = channelList as Record<string, Channel>

  if (genre !== undefined && genre !== null) {
    const allKeys = Object.keys(channels)
    let output: Record<string, Channel> = {}

    if (Array.isArray(genre)) {
      const outputChannelKeys = allKeys.filter(k => genre.includes(channels[k].genre))

      outputChannelKeys.forEach(k => (output[k] = channels[k]))
    } else {
      const outputChannelKeys = allKeys.filter(k => channels[k].genre === genre)

      outputChannelKeys.forEach(k => (output[k] = channels[k]))
    }

    return output
  }

  return channels
}

/**
 * @param genre Optional genre(s) to filter by
 */
export function getAllChannelsArray(genre?: Genres | Genres[]): Channel[] {
  return Object.values(getAllChannels(genre))
}

/**
 * @param genre Optional genre(s) to filter by
 */
export function getAllChannelNumbersArray(genre?: Genres | Genres[]): string[] {
  return Object.keys(getAllChannels(genre))
}

export function getChannelByChannelNumber(channelNumber: string): Channel | null {
  return channelList[channelNumber] || null
}

/**
 * @param genre Optional genre(s) to filter by
 */
export function getChannelBySID(sid: string, genre?: Genres | Genres[]): Channel | null {
  return getAllChannelsArray(genre).find(channel => channel.sid === sid) || null
}

/**
 * @param genre Optional genre(s) to filter by
 */
export function getNChannelsFromNumber(channelNumber: string, n: number, genre?: Genres | Genres[]): Channel[] | null {
  const startIndex = getAllChannelNumbersArray(genre).indexOf(channelNumber)

  if (startIndex === -1) return null

  return getAllChannelsArray(genre).slice(startIndex, startIndex + n) as Channel[]
}

/**
 * @param genre Optional genre(s) to filter by
 */
export function getChannelNumberFromNumberPlusN(channelNumber: string, n: number, genre?: Genres | Genres[]): string {
  const channelNumbers = getAllChannelNumbersArray(genre)

  const startIndex = channelNumbers.indexOf(channelNumber)
  const result = channelNumbers[Math.min(Math.max(startIndex + n, 0), channelNumbers.length - 1)]

  return result
}
