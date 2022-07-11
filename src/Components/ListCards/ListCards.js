import {Link} from "react-router-dom";
import Button from "../Button/Button";

export default function ListCards({id, title, avatar}) {


  return (
    <section className="flex flex-row w-1/2 h-32 m-3 bg-stone-700 rounded-3xl ">

      <Link
        to={`/card/${id}`}
      >
        <img className="h-32 w-32 rounded-l-3xl" alt={title} src={avatar}/>
      </Link>

      <div className="flex flex-col px-4 py-6">
        <p className="text-stone-500 text-sm uppercase">Name:</p>
        <h3 className="text-white">{title}</h3>
        <Button id={id} login={title} avatar={avatar} />
      </div>

    </section>
  )
}