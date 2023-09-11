import React from 'react'
import { ClipLoader } from 'react-spinners'

interface IProps {
    disabled?: boolean
    loading?: boolean
    icon?: JSX.Element
    text: string
    handleClick: () => void
}
const Button = ({ disabled = false, loading = false, handleClick, text }: IProps) => {
    return (
      <button
        onClick={handleClick}
        disabled={disabled || loading}
        className={`flex items-center font-poppins justify-center gap-1 transition-all hover:brightness-90 disabled:brightness-[60%] ease-in text-center disabled:cursor-not-allowed bg-black shadow-2xl border border-white text-[14px] text-white px-4 py-[3px] border-transparent outline-none rounded`}
      >
        <ClipLoader color={"#fff"} loading={loading} size={20} />
        {text}
      </button>
    );
}

export default Button
