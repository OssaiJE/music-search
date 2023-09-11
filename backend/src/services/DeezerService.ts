import axios from 'axios';
import { getDeezerApi } from '../utilities/getEnvs';
import { logger } from '../utilities/logger';

// Retrieve the Deezer API URL from environment variables
const DEEZER_API = getDeezerApi();

/**
 * Service class for interacting with the Deezer API.
 */
class DeezerService {
  /**
   * Search for tracks on Deezer.
   *
   * @param query - The search query.
   * @returns data - A promise that resolves to the search results.
   */
  static async searchTrack(query: string) {
    logger.info('searchTrack service', { query });
    const { data } = await axios.get(`${DEEZER_API}/search?q=${query}`);
    logger.info('searchTrack service', { data });
    return data;
  }

  /**
   * Get an artist's details from Deezer.
   *
   * @param id - The ID of the artist.
   * @returns data - A promise that resolves to the artist's details.
   */
  static async getArtist(id: number) {
    logger.info('getArtist service', { id });
    const { data } = await axios.get(`${DEEZER_API}/artist/${id}`);
    logger.info('getArtist service', { data });
    return data;
  }

  /**
   * Get the top tracks of an artist from Deezer.
   *
   * @param id - The ID of the artist.
   * @returns data - A promise that resolves to the top tracks.
   */
  static async topArtistTracks(id: number) {
    logger.info('topArtistTracks service', { id });
    const { data } = await axios.get(`${DEEZER_API}/artist/${id}/top`);
    logger.info('topArtistTracks service', { data });
    return data;
  }

  /**
   * Get an artist's albums from Deezer.
   *
   * @param id - The ID of the artist.
   * @returns data - A promise that resolves to the artist's albums.
   */
  static async artistAlbums(id: number) {
    logger.info('artistAlbums service', { id });
    const { data } = await axios.get(`${DEEZER_API}/artist/${id}/albums`);
    logger.info('artistAlbums service', { data });
    return data;
  }

  /**
   * Get a album from Deezer.
   *
   * @param id - The ID of the artist.
   * @returns data - A promise that resolves to the  album.
   */
  static async getAlbum(id: number) {
    logger.info('Album service', { id });
    const { data } = await axios.get(`${DEEZER_API}/album/${id}`);
    logger.info('Albums service', { data });
    return data;
  }

  /**
   * Get a track from Deezer.
   *
   * @param id - The ID of the artist.
   * @returns data - A promise that resolves to the  album.
   */
  static async getTrack(id: number) {
    logger.info('Track service', { id });
    const { data } = await axios.get(`${DEEZER_API}/track/${id}`);
    logger.info('Track service', { data });
    return data;
  }
}

export default DeezerService;
