import React, { useEffect, useState } from 'react'
import Album from './AlbumCard'
import Button from './Button'
import { axiosInstance } from '../config/axiosInstance'
import { toast } from 'react-toastify'
interface IProps {
    setAlbumLoading: React.Dispatch<React.SetStateAction<boolean>>
    artistId: number
}
const AlbumList = ({ setAlbumLoading, artistId }: IProps) => {
    const [loadMore, setLoadMore] = useState(1)
    const [albums, setAlbums] = useState([])

    const searchAlbums = () => {
        setAlbumLoading(true)
        axiosInstance.get(`artist/${artistId}/albums`)
            .then((res) => {
                setAlbums(res?.data?.data?.data);
                setAlbumLoading(false)
            }).catch((err) => {
                toast.error(err?.response?.data?.message);
                setAlbumLoading(false)
            })
    }

    useEffect(() => {
        searchAlbums()
    }, [artistId])

    return (
        <div className='md:p-[20px] my-4 w-[100%]'>
            <div className='text-center font-bold text-[20px] mb-3 w-full'>ALBUMS</div>
            <div className='flex flex-wrap gap-4 justify-center w-full'>
                <div className='lg:w-[70%] flex flex-wrap gap-4 justify-center'>
                    {albums?.slice(0, loadMore * 5)?.map((album, index) => (
                        <Album album={album} key={index} />
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-center mt-[20px]'>

                {
                    loadMore * 5 !== albums?.length &&
                    <Button
                        handleClick={() => setLoadMore(prev => prev + 1)}
                        text='Load More'
                    />
                }

            </div>
        </div>
    )
}

export default AlbumList