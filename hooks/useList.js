import { useGetListsQuery } from '@/store/slices/apiSlice'
import { setGroceryList } from '@/store/slices/listSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useListHelper = () => {
  const { groceryList } = useSelector((state) => state.list)
  const dispatch = useDispatch()

  const { data: lists, error, isLoading, isSuccess } = useGetListsQuery()

  useEffect(() => {
    if (isSuccess && lists) {
      dispatch(setGroceryList(lists))
    }
  }, [isSuccess, lists, dispatch])

  return {
    lists,
    queryStatus: { isLoading, isError: error, isSuccess },
    groceryList
  }
}

export default useListHelper
