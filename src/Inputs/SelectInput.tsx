import React from 'react'

const SelectInput = ({placeholder,option}:any) => {
  return (
    <div>
    <select
      className="absolute w-[504px] h-[44px] border-[1px] border-solid border-[#0D6CAF] rounded-[4px] pl-[20px] leading-[14px] text-[#000000] text-opacity-[50%] font-normal font-inter text-[14px] leading-[15px] outline-none"
      placeholder={placeholder}
    >
      <option className="text-[18px] text-[#000000] text-opacity-[50%] ">{option}</option>
    </select>
  </div>
  )
}

export default SelectInput