import React from 'react'

const InputSellerTextField = ({placeholder}:any) => {
  return (
    <div>
    <textarea
      className="absolute w-[1065px] h-[97px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[20px] pt-[20px] pr-[20px] pb-[20px]   placeholder:text-[rgba(30, 30, 30, 0.7)] text-opacity-[50%] font-normal font-inter text-[14px] leading-[24px] outline-none"
      placeholder={placeholder}
    />
  </div>
  )
}

export default InputSellerTextField