import { useCallback, useEffect, useMemo, useState } from 'react'
import { TAlbum } from '../types/types'
import { axiosInstance } from '../config/axiosInstance'
import TrackItem from './TrackItem'
import { useAppSelector } from '../hooks/redux'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'
import AlbumList from './AlbumList'
import { useParams } from 'react-router-dom'

const AlbumInfo = () => {
    const artist = useAppSelector(state => state.app.artist)

    const album = useAppSelector(state => state.app.currentAlbum)
    const [albumLoading, setAlbumLoading] = useState(false)
    const [albumInfoLoading, setAlbumInfoLoading] = useState(false)
    const [albumInfo, setAlbumInfo] = useState({} as TAlbum)
    const getArtistId = useMemo(() => { return artist.id }, [artist])
    const setFn = useCallback(() => { return setAlbumLoading }, [])
    const idFromRoute = useParams()?.id

    const searchAlbum = () => {
        setAlbumInfoLoading(true)
        axiosInstance.get(`album/${album?.id ?? idFromRoute}`)
            .then((res) => {
                setAlbumInfo(res?.data?.data);
                setAlbumInfoLoading(false)
            }).catch((err) => {
                toast.error(err?.response?.data?.message);
                setAlbumInfoLoading(false)
            })
    }

    useEffect(() => {
        searchAlbum()
    }, [album])

    return (
        <>
            {
                albumLoading || albumInfoLoading ?
                    <div className='h-[100vh] flex items-center justify-center'>
                        <ClipLoader loading={albumLoading || albumInfoLoading} color={'green'} size={50} />
                        Fetching Album info...
                    </div> :

                    <div className='!pt-2 p-2'>
                        <div className='md:flex shadow-md'>
                            <div className='sl:flex items-center gap-3 bg-[whitesmoke] md:w-[65%] py-[25px] px-2'>
                                <img src={albumInfo?.cover_medium} className='h-[300px]' />
                                <div className='xs:mt-2 md:mt-0'>
                                    <div className='mb-2 font-[700] text-[18px]'>{albumInfo?.title}</div>
                                    <div className='mb-3 font-[700] text-xs'>
                                        {albumInfo?.artist?.name}
                                    </div>

                                    <div className=' text-xs my-2'><span className='font-bold'>Monthly Listeners : </span>
                                        {albumInfo?.fans}
                                    </div>
                                    <div className='text-xs mb-2'>
                                        <div className='mb-2'><span className='font-bold'>Contributors : </span>
                                            {
                                                albumInfo?.contributors?.map((contributor, index) => (<span key={index}>{contributor?.name}{albumInfo?.contributors && index !== albumInfo?.contributors?.length-1 && ', '}</span>))
                                            }
                                        </div>
                                        {
                                            albumInfo?.genres && albumInfo?.genres?.data?.length > 0 &&
                                            <div><span className='font-bold'>Genres : </span>
                                            {
                                                albumInfo?.genres?.data?.map((genre, index) => (<span key={index}>{genre?.name}{albumInfo?.genres && index !== albumInfo?.genres?.data?.length-1 && ', '}</span>))
                                            }
                                        </div>
                                        }
                                        
                                    </div>

                                    <div className=' text-xs mb-2'><span className='font-bold'>Release date : </span>
                                        {albumInfo?.release_date}
                                    </div>
                                </div>
                            </div>
                            <div className='xs:w-[100%] sl:w-[30%] my-[30px] flex items-center'>
                                <div className='w-[90%]'>
                                    <span className='p-4 font-[700] text-[18px]'>Tracks</span>
                                    {
                                        albumInfo?.tracks?.data?.map((track, index) => (
                                            <TrackItem index={index} track={track} key={index} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <AlbumList setAlbumLoading={setFn} artistId={getArtistId ?? albumInfo?.artist?.id} />
                    </div>
            }
        </>
    )
}

export default AlbumInfo