import { getRandomColor } from '@/utils/colorRandomizer'
import { formatDate, getDayName } from '@/utils/dateHelper'
import { XMarkIcon } from '@heroicons/react/24/solid'

const ListCard = ({ list }) => {
  const color = getRandomColor()
  return (
    <div className="flex mt-12 list-card overflow-hidden w-full relative">
      <div className={`flex flex-col p-[16px] bg-${color} border-r border-black`}>
        <span className="font-bricolage-32-extrabold leading-7 align-center text-center">
          {list?.listEntries?.length}
        </span>
        <span className="font-archivo-14-normal">Items</span>
      </div>
      <div className="flex flex-col p-[16px] w-full bg-white">
        <span className={`font-bricolage-20-semibold leading-7 ${color}`}>
          {getDayName(list?.date)}{' '}
        </span>
        <div className="flex justify-between w-full items-end">
          <div className="font-archivo-12-normal">{formatDate(list?.date)}</div>
          <div className="font-archivo-14-normal">
            Total of <b>Php 1450</b>
          </div>
        </div>
      </div>
      <XMarkIcon
        className="absolute stroke-current stroke-2 right-10 top-2"
        height={18}
      />
    </div>
  )
}

export default ListCard
