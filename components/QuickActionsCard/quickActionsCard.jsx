import { ClipboardDocumentCheckIcon, EyeIcon } from '@heroicons/react/24/solid'

const QuickActionsCard = () => {
  return (
    <div className="mt-32 flex bg-white card-border w-full">
      <div className="w-1/2 p-24 flex items-center flex-col">
        <ClipboardDocumentCheckIcon height={28} />
        <span className="mt-1 font-archivo-12-normal">Add New List</span>
      </div>
      <div className="w-1/2 p-24 flex items-center justify-end flex-col border-l border-black">
        <EyeIcon height={28} />
        <span className="font-archivo-12-normal">Show Current List</span>
      </div>
    </div>
  )
}

export default QuickActionsCard
