import { TTrack } from '../types/types'
import { useAppDispatch } from '../hooks/redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentTrack } from '../redux/slice/AppSlice'

interface IProps {
  index: number
  track: TTrack
}
const TrackItem = ({ index, track }: IProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch(setCurrentTrack(track))
    navigate(`/track/${track?.id}`)
  }
  return (
    <div
      className='flex border-b-[1px] mx-5 py-3 px-1 items-center justify-between w-[100%] text-[grey] text-[14px] font-[600] cursor-pointer hover:bg-[whitesmoke]'
      onClick={() => handleClick()}
    >
      <div className='flex gap-2'>
        <div>{index + 1}</div>
        <div>{track?.title}</div>
      </div>
      <div>{track?.duration}</div>
    </div>
  )
}

export default TrackItem