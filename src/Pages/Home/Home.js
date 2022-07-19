import {useState, useEffect } from "react"
import { useInView } from 'react-intersection-observer';
import {useSelector, useDispatch} from "react-redux";
import {DebounceInput} from 'react-debounce-input';

import axiosURL from "../../axios";
import Favorite from "../../Components/Favorite/Favorite";
import ListCards from "../../Components/ListCards/ListCards";
import {addData} from "../../store";


function Home() {

  const [inputValue, setInputValue] = useState("darius")
  const [searchUsers, setSearchUsers] = useState([])
  const [showUser, setShowUser] = useState(16)


  const { favoriteData } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { ref, inView, entry  } = useInView();


  useEffect(() => {

    if (inputValue.length <= 3) {
      return
    }

    const fetchData = async () => {
      try {
        const responseUsers = await axiosURL.get(`/search/users?q=${inputValue}&per_page=${showUser}`)
        setSearchUsers(responseUsers.data.items)
        dispatch(addData(responseUsers.data.items))
      } catch {
        console.log("error")
      }
    }

    fetchData().catch(console.error)

  }, [inputValue, showUser, dispatch]);

  useEffect(() => {

    if (inView) {
      setTimeout(() => {
        setShowUser((pref) => pref + 4)
      }, 1000)
    }

  }, [inView]);

  const searchInput = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const reset = () => {
    window.location.reload();
  }

  return (
    <>
      <Favorite localData={favoriteData} />
      <div className="flex flex-col items-center">
          <DebounceInput className="rounded-3xl h-10 w-64 pl-5 mt-5" debounceTimeout={3000} onChange={(event) => searchInput(event)}/>
          <button className="text-white py-2 text-xs" onClick={reset}>Reset Search</button>

        <div className="md:w-2/3 w-full h-full flex flex-wrap justify-center ">

          {searchUsers?.map((value, key) => (
              <ListCards key={`listCard-${value.id}`} id={value.id} title={value.login} avatar={value.avatar_url} />
          ))}

          <div ref={ref}>{entry?.isVisible}</div>
        </div>
      </div>
    </>
  )
}

export default Home;