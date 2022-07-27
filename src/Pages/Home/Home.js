import {useState} from "react"
import { useInView } from 'react-intersection-observer';
import { useSelector } from "react-redux";
import {DebounceInput} from 'react-debounce-input';

import Favorite from "../../Components/Favorite/Favorite";
import ListCards from "../../Components/ListCards/ListCards";
import useFetchApi from "../../useHooks/useFetchApi";


function Home() {

  const [inputValue, setInputValue] = useState("darius")

  const { ref, inView } = useInView();
  const { searchUsers, error } = useFetchApi(inputValue, inView);
  const { favoriteData } = useSelector((state) => state);


  const searchInput = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  return (
    <>
      <Favorite localData={favoriteData} />
      <div className="flex flex-col items-center">
          <DebounceInput className="rounded-3xl h-10 w-64 pl-5 mt-5" debounceTimeout={500} onChange={(event) => searchInput(event)}/>

        {error?
          <h2 className="text-2xl text-red-600">Bitte versuchen Sie es später erneut</h2>
        : <></>}
        <div className="md:w-2/3 w-full h-full flex flex-wrap justify-center ">

          {searchUsers?.map((value) => (
              <ListCards key={`listCard-${value.id}`} id={value.id} title={value.login} avatar={value.avatar_url} />
          ))}

          <div ref={ref}></div>
        </div>
      </div>
    </>
  )
}

export default Home;