
import { useAppDispatch } from '../hooks/redux'
import { useNavigate } from 'react-router-dom'
import { TTrack } from '../types/types'
import { setCurrentTrack } from '../redux/slice/AppSlice'

interface IProps {
  track: TTrack
}
const SearchResultCard = ({ track }: IProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleClick = (track: TTrack) => {
    dispatch(setCurrentTrack(track))
    navigate(`/track/${track?.id}`)
  }

  return (
    <div className="w-[250px] shadow-md" onClick={() => handleClick(track)}>
      <img src={track?.album?.cover_medium} className="w-[100%]" />
      <div className=" text-[sm] w-[100%] px-2">
        <div className="py-2 font-[700]">{`${Math.floor(
          track?.duration / 60
        )}:${
          track?.duration % 60 > 10
            ? track?.duration % 60
            : `0${track?.duration % 60}`
        }`}</div>
        <div className="py-2 font-[700] w-full">
          {`${track?.title} by `} {track?.artist?.name}
        </div>
        <div className="mb-3 w-[100%] hidden ms:block">
          <span className="font-[700]">Album: </span>
          {track?.album?.title}
        </div>
      </div>
    </div>
  );
}

export default SearchResultCard