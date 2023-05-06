"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { techList } from "@/data"

export function SearchSidebar() {
  return (
    <div className="flex flex-col justify-start items-start gap-3">
      <h2>Technologie</h2>
      <div className="flex flex-col gap-2">{techList.map((item) =>
        <div className="flex items-center space-x-2">
          <Checkbox id={item.title} />
          <label
            htmlFor={item.title} 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            {item.title}
          </label>
        </div>)}
      </div>
    </div>
  )
}
