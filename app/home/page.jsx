'use client'

import { apiSlice } from '@/store/slices/apiSlice'
import Filter from '@/components/Filter/filters'
import GreetingCard from '@/components/GreetingCard/greetingCard'
import PrevLists from '@/components/PrevLists/prevLists'
import QuickActionsCard from '@/components/QuickActionsCard/quickActionsCard'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function Home() {
  return (
    <Provider store={store}>
      <div className="p-24 h-100 flex flex-col">
        <GreetingCard name="Jp" />
        <QuickActionsCard />
        <div className="mt-36 font-bricolage-14-semibold flex">Previous Lists</div>
        <Filter />
        <PrevLists />
      </div>
    </Provider>
  )
}
