import React from 'react'

const SmallInput = ({placeholder}:any) => {
  return (
    <div>
    <input
      className=" w-[280px] h-[44px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[20px]  leading-[14px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[14px] leading-[24px] outline-none"
      placeholder={placeholder}
    >
    </input>
  </div>
  )
}

export default SmallInput