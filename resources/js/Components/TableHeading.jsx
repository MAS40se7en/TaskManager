import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";


export default function TableHeading ({name, children, sortChanged = () => {}, sortable = true, sort_field = null, sort_direction = null}) {
    return (
    <th onClick={(e) => sortChanged(name)}>
    <div className="px-3 py-2 flex gap-1 items-center justify-between cursor-pointer">
      {children}
      {sortable && (
        <div>
        <ChevronUpIcon 
        className={
            "w-4 " +
            (sort_field === name &&
                sort_direction === "asc" 
                ? "text-white"
                : "")
        } />
        <ChevronDownIcon
        className={
            "w-4 -mt-2 " +
            (sort_field === name &&
                sort_direction === "desc" 
                ? "text-white"
                : "")
        }  />
      </div>
      )}
    </div>
  </th>)
}