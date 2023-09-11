import { useCallback, useEffect, useMemo, useState } from 'react'
import { TTrack } from '../types/types'
import { axiosInstance } from '../config/axiosInstance'
import TrackItem from './TrackItem'
import { useAppSelector } from '../hooks/redux'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'
import AlbumList from './AlbumList'
import {useParams} from 'react-router-dom'
const Artist = () => {
    const artist = useAppSelector(state => state.app.artist)

    const [top5, setTop5] = useState<TTrack[]>([])
    const [artistObj, setArtistObj] = useState(artist)
    const [artistLoading, setArtistLoading] = useState(false)
    const [topLoading, setTopLoading] = useState(false)
    const [albumLoading, setAlbumLoading] = useState(false)
    const idFromRoute = useParams()?.id

    const getArtistId = useMemo(() => { return artist.id ??  idFromRoute}, [artist])
    const setFn = useCallback(()=>{ return setAlbumLoading},[])

    // the artist object from the searched track is a bit different from the artist object gotten from the /artist/id endpoint
    // that's why I'm making this extra call
    const searchArtist = () => {
        setArtistLoading(true)
        axiosInstance.get(`artist/${artist?.id ?? idFromRoute}`)
            .then((res) => {
                setArtistObj(res?.data?.data);
                setArtistLoading(false)
            }).catch((err) => {
                toast.error(err?.response?.data?.message);
                setArtistLoading(false)
            })
    }

    const searchTop5 = () => {
        setTopLoading(true)
        axiosInstance.get(`artist/${artist?.id ?? idFromRoute}/top?limit=5`)
            .then((res) => {
                setTop5(res?.data?.data?.data);
                setTopLoading(false)
            }).catch((err) => {
                toast.error(err?.response?.data?.message);
                setTopLoading(false)
            })
    }
    useEffect(() => {
        searchArtist()
        searchTop5()
    }, [artist])
    return (
        <>
            {
                albumLoading || topLoading || artistLoading ?
                    <div className='h-[100vh] flex items-center justify-center'>
                        <ClipLoader loading={albumLoading || topLoading || artistLoading} color={'green'} size={50} />
                        Fetching Artist info...
                    </div> :

                    <div className='!pt-2 p-2'>
                        <div className='md:flex shadow-md'>
                            <div className='sl:flex items-center gap-3 bg-[whitesmoke] md:w-[65%] py-[25px] px-2'>
                                <img src={artistObj?.picture_medium} alt ='' className='h-[300px]' />
                                <div className='xs:mt-2 md:mt-0'>
                                    <div className='mb-2 font-[700] text-[18px]'>{artistObj?.name}</div>
                                    <div className='mb-3 font-[700] text-xs'>
                                        {
                                            artistObj?.nb_fan &&
                                                artistObj?.nb_fan > 1000 ? (artistObj?.nb_fan / 1000).toFixed(1) + 'k' :
                                                artistObj?.nb_fan
                                        } fans
                                    </div>
                                    <div className='w-[90%] text-xs'>
                                        <div>{`${artistObj?.name}  has `} <span className='font-bold'>{artistObj?.nb_album} albums.</span></div>
                                        <div>Visit artist's profile at <a href={artistObj?.link} target='_blank' rel="noreferrer" className='text-[blue] underline'>{artistObj?.link}</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='xs:w-[100%] sl:w-[30%] my-[30px] flex items-center'>
                                <div className='w-[90%]'>
                                    <span className='p-4 font-[700] text-[18px]'>Top Tracks</span>
                                    {
                                        top5?.map((track, index) => (
                                            <TrackItem index={index} track={track} key={index} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <AlbumList setAlbumLoading={setFn} artistId={getArtistId} />
                    </div>
            }
        </>
    )
}

export default Artist