import {Link} from "react-router-dom";
import Button from "../Button/Button";

export default function ListCards({id, title, avatar}) {


  return (
    <section className="flex flex-row md:w-1/2 w-full md:h-32 h-24 md:m-3 m-1 bg-stone-700 rounded-3xl ">

      <Link
        to={`/card/${id}`}
      >
        <img className="md:h-32 md:w-32 h-24 w-24 rounded-l-3xl" alt={title} src={avatar}/>
      </Link>

      <div className="flex flex-col md:px-4 px-2 md:py-6 py-3">
        <p className="text-stone-500 md:text-sm text-xs uppercase">Name:</p>
        <h3 className="text-white md:text-base text-sm">{title}</h3>
        <Button id={id} login={title} avatar={avatar} />
      </div>

    </section>
  )
}