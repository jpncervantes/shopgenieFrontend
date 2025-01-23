import { MagnifyingGlassIcon, FunnelIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import DropdownSelect from './Dropdown/dropdownSelect'

const Filter = () => {
  const [filterToggle, setFilterToggle] = useState(false)

  return (
    <div className="flex w-full flex-col mt-10">
      {/* Search and Filter Component */}
      <div className="flex w-full">
        <div className="flex relative w-full">
          <MagnifyingGlassIcon height={17} className="absolute top-[10px] left-[13px]" />
          <input
            type="text"
            className="h-36 border border-black rounded w-full pl-11 font-archivo-12-normal"
            placeholder="Search your previous lists"
          />
        </div>
        <div className="bg-pink basic-button ml-8">
          <FunnelIcon height={18} />
        </div>
        <div
          className="bg-teal basic-button ml-8"
          onClick={() => setFilterToggle(!filterToggle)}
        >
          <PlusIcon height={18} stroke="20px" className="stroke-current stroke-2" />
        </div>
      </div>

      {/* Filter Options */}
      {filterToggle && (
        <div className="mt-18">
          <DropdownSelect />
        </div>
      )}
    </div>
  )
}

export default Filter
