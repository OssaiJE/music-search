import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useNavigate, useParams } from 'react-router-dom'
import { TArtist } from '../types/types'
import { setArtist } from '../redux/slice/AppSlice'
import { ClipLoader } from 'react-spinners'
import { axiosInstance } from '../config/axiosInstance'
import { toast } from 'react-toastify'

const Track = () => {
    const [playing, setPlaying] = useState(false)
    const [track, setTrack] = useState(useAppSelector(state => state.app.currentTrack))
    const [loading, setLoading] = useState(false)
    const [song, _] = useState(new Audio(track?.preview))
    const idFromRoute = useParams()?.id
    const handlePlay = () => {
        setPlaying(!playing)
        if (playing) {
            song.pause()
        } else {
            song.play()
        }
    }

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleClick = (artist: TArtist) => {
        dispatch(setArtist(artist))
        navigate(`/artist/${artist?.id ?? idFromRoute}`)
    }

    useEffect(() => {
        song.pause()
        if (!Object.keys(track)?.length) {
            axiosInstance.get(`/track/${idFromRoute}"`)
                .then((res) => {
                    setTrack(res?.data?.data?.data);

                    setLoading(false)
                }).catch((err) => {
                    toast.error(err?.response?.data?.message);
                    setLoading(false)
                })
        }
    }, [])
    return (
        <div className='mt-[60px]'>
            {
                loading ?
                    <div className='w-[100%] flex justify-center'>
                        <ClipLoader loading={loading} size={50} />
                    </div> :
                    <div className='mt-[60px] md:flex items-center justify-center gap-[5%]'>
                        <img src={track?.album?.cover_big} className=' md:max-w-[50%]' />
                        <div className=' text-[sm] xs:max-w-[80%] md:max-w-[40%]'>
                            <div className='py-2 font-[700]'>{`${Math.floor(track?.duration / 60)}:${track?.duration % 60 > 10 ? track?.duration % 60 : `0${track?.duration % 60}`}`}</div>
                            <div className='py-2 font-[700]'>{`${track?.title} by `} <span className='text-green cursor-pointer hover:underline' onClick={() => handleClick(track?.artist)}>{track?.artist?.name}</span></div>
                            <div className='mb-3'><span className='font-[700]'>Album: </span>{track?.album?.title}</div>
                            <Button
                                handleClick={() => handlePlay()}
                                text={!playing ? 'Play' : 'Pause'}
                            />
                        </div>
                    </div>
            }
        </div>


    )
}

export default Track