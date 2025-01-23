import useListHelper from '@/hooks/useList'
import { useGetListsQuery } from '@/store/slices/apiSlice'
import { getRandomColor } from '@/utils/colorRandomizer'

const { default: ListCard } = require('./ListCard/listCard')

const PrevLists = () => {
  const { groceryList } = useListHelper()
  console.log(groceryList)
  return (
    <div className="mt-12 h-100vh overflow-y-auto pr-1 pb-2 flex flex-col flex-1">
      {groceryList?.length > 0 &&
        groceryList.map((list) => {
          const color = getRandomColor()
          return <ListCard key={list._id} list={list} color={color} />
        })}
    </div>
  )
}

export default PrevLists
