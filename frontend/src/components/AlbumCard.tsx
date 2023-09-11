import { TAlbum } from '../types/types'
import { useAppDispatch } from '../hooks/redux'
import {useNavigate} from 'react-router-dom'
import { setCurrentAlbum } from '../redux/slice/AppSlice'

interface IProps {
    album: TAlbum
}
const Album = ({ album }: IProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(setCurrentAlbum(album))
        navigate(`/album/${album?.id}`)
    }

    return (
        <div className='w-[150px] pb-2 h-[230px] flex flex-col justify-between shadow-lg cursor-pointer ease-in duration-300' onClick={()=> handleClick()}>
            <div>
                <img src={album?.cover_medium} style={{ height: '150px', width: '150px' }} />
                <div className='font-[700] mt-2 mb-1 text-xs pl-2'>{album?.title}</div>
            </div>
            <div className='text-[grey] pl-2 text-xs font-bold'>{album?.release_date?.split('-')[0]}</div>
        </div>
    )
}

export default Album