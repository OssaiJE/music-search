import express from 'express';
import {
  artistAlbums,
  getAlbum,
  getArtist,
  getTrack,
  searchTrack,
  topTracks
} from '../controllers/DeezerController';
import tryCatch from '../utilities/tryCatch';

const router = express.Router();

router.get('/search', tryCatch(searchTrack));
router.get('/artist/:id', tryCatch(getArtist));
router.get('/artist/:id/top', tryCatch(topTracks));
router.get('/artist/:id/albums', tryCatch(artistAlbums));
router.get('/album/:id', tryCatch(getAlbum));
router.get('/track/:id', tryCatch(getTrack));

export default router;
