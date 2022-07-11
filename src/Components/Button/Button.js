import addedToLocalStorage from "../addedToLocalStorage";
import {addToStorage} from "../../store";
import {useDispatch} from "react-redux";

export default function Button({id, login, avatar}) {
  const dispatch = useDispatch();

  const updateLocalStorage = (event) => {
    addedToLocalStorage(event)
    dispatch(addToStorage(event))
  }

  return <button className="bg-yellow-400 mt-3 py-1 px-6 text-stone-900 rounded-3xl" onClick={() => updateLocalStorage({id: id, login: login, avatar: avatar})}>Added to Favorite</button>
}