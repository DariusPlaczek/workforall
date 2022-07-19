import addedToLocalStorage from "../addedToLocalStorage";
import {addToStorage} from "../../store";
import {useDispatch} from "react-redux";

export default function Button({id, login, avatar}) {
  const dispatch = useDispatch();

  const updateLocalStorage = (event) => {
    addedToLocalStorage(event)
    dispatch(addToStorage(event))
  }

  return <button className="bg-yellow-400 mt-3 md:py-1 py-0.5 md:px-6 px-3 text-stone-900 rounded-3xl md:text-base text-sm" onClick={() => updateLocalStorage({id: id, login: login, avatar: avatar})}>Added to Favorite</button>
}