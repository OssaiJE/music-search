export type TTrack = {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    type: string;
    artist: TArtist;
    album: TAlbum
}

export type TArtist = {
    id: number;
    name: string;
    link?: string;
    picture?: string;
    picture_small?: string;
    picture_medium?: string;
    picture_big?: string;
    picture_xl?: string;
    tracklist: string;
    type: string;
    share?: string,
    nb_album?: number,
    nb_fan?: number,
    radio?: boolean,

}

type Genre = {
    id: number;
    name: string;
    picture: string;
    type: string;
}
export type TAlbum = {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracks?: {data: TTrack[]}
    type: string;
    release_date?: string
    artist?: TArtist
    contributors?: TArtist[];
    fans?: number;
    genres?: {data: Genre[]}
}