export default function TopBar() {
  return (
    <div className="flex h-[44px] items-center justify-start">
      <div className="ml-2">|||</div> {/*hamburger svg*/}
      <div className="ml-1 text-text-gray-200 font-extrabold text-3xl">Rooms</div>
      <div className="flex justify-center items-center ml-auto mr-3 bg-table-yellow rounded-full h-8 w-8">
        Y.M
      </div>
    </div>
  )
}
