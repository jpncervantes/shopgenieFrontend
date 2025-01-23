import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

const people = [
  { id: 1, name: 'Date' },
  { id: 2, name: 'Total amount spent' },
  { id: 3, name: 'Number of Items' },
  { id: 4, name: 'Name' }
]

function DropdownSelect() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className="w-full h-[24px] flex relative items-center">
      <span className="font-archivo-14-semibold mr-4">Filter:</span>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <ListboxButton className="w-[50%] h-[30px] bg-white basic-button font-archivo-12-normal">
          {selectedPerson.name}
        </ListboxButton>
        <ListboxOptions
          className="absolute mt-2 w-[50%] font-archivo-12-normal rounded border border-black z-10 bg-white"
          style={{ position: 'absolute', left: 54, top: 25 }} // Ensure absolute positioning
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group flex bg-white data-[focus]:bg-teal w-full w-full p-2 data-[focus]:border-t data-[focus]:border-b data-[focus]:border-black"
            >
              {/* <CheckIcon className="invisible size-5 group-data-[selected]:visible" /> */}
              {person.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      <div className="basic-button bg-teal ml-2">
        <ArrowUpIcon height={12} className="stroke-current stroke-2" />
      </div>
    </div>
  )
}

export default DropdownSelect
