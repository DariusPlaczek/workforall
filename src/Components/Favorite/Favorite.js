export default function Favorite({localData}) {

  return (
    <section className="fixed right-0 ">
      <h3 className="p-5 text-lg text-yellow-300 uppercase">My Favorites</h3>
      {localData?.map((value, key) => (
        <div key={`favoriteList-${value.id}`} className="w-40 h-12 flex flex-row items-center bg-slate-800 rounded-l-xl mb-1">
          <img className="h-12 w-12 rounded-l-xl" alt={value.login} src={value.avatar}/>
          <h4 className="text-white text-xs pl-1">{value.login}</h4>
        </div>
      ))}
    </section>
  )
}