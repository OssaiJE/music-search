import { Request, Response } from 'express';
import DeezerService from '../services/DeezerService';
import { failure, success } from '../utilities/response';
import { logger } from '../utilities/logger';

/**
 * Controller for searching tracks.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 */
export const searchTrack = async (req: Request, res: Response) => {
  logger.info('searchTrack controller', { query: req.query.q });
  const query: string = req.query.q ? String(req.query.q) : '';
  const tracks = await DeezerService.searchTrack(query);

  let statusCode = 200;
  if (tracks.error) {
    statusCode = tracks.error.code;
    return failure(res, statusCode, tracks.error.message, tracks.error);
  }

  return success(res, statusCode, 'Tracks retrieved successfully', tracks);
};

/**
 * Controller for retrieving an artist.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 */
export const getArtist = async (req: Request, res: Response) => {
  logger.info('getArtist controller', { id: req.params.id });
  const { id } = req.params;
  const artist = await DeezerService.getArtist(parseInt(id, 10));

  let statusCode = 200;
  if (artist.error) {
    statusCode = artist.error.code;
    return failure(res, statusCode, artist.error.message, artist.error);
  }

  return success(res, statusCode, 'Artist retrieved successfully', artist);
};

/**
 * Controller for retrieving top tracks of an artist.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 */
export const topTracks = async (req: Request, res: Response) => {
  logger.info('topTracks controller', { id: req.params.id });
  const { id } = req.params;
  const tracks = await DeezerService.topArtistTracks(parseInt(id, 10));

  let statusCode = 200;
  if (tracks.error) {
    statusCode = tracks.error.code;
    return failure(res, statusCode, tracks.error.message, tracks.error);
  }

  return success(res, statusCode, 'Top tracks retrieved successfully', tracks);
};

/**
 * Controller for retrieving artist albums.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 */
export const artistAlbums = async (req: Request, res: Response) => {
  logger.info('artistAlbums controller', { id: req.params.id });
  const { id } = req.params;
  const albums = await DeezerService.artistAlbums(parseInt(id, 10));

  let statusCode = 200;
  if (albums.error) {
    statusCode = albums.error.code;
    return failure(res, statusCode, albums.error.message, albums.error);
  }

  return success(res, statusCode, 'Artist albums retrieved successfully', albums);
};

/**
 * Controller for retrieving an album.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 */
export const getAlbum = async (req: Request, res: Response) => {
  logger.info('getAlbum controller', { id: req.params.id });
  const { id } = req.params;
  const album = await DeezerService.getAlbum(parseInt(id, 10));

  let statusCode = 200;
  if (album.error) {
    statusCode = album.error.code;
    return failure(res, statusCode, album.error.message, album.error);
  }

  return success(res, statusCode, 'Album retrieved successfully', album);
};

/**
 * Controller for retrieving artist albums.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 */
export const getTrack = async (req: Request, res: Response) => {
  logger.info('getTrack controller', { id: req.params.id });
  const { id } = req.params;
  const track = await DeezerService.getTrack(parseInt(id, 10));

  let statusCode = 200;
  if (track.error) {
    statusCode = track.error.code;
    return failure(res, statusCode, track.error.message, track.error);
  }

  return success(res, statusCode, 'Track retrieved successfully', track);
};
