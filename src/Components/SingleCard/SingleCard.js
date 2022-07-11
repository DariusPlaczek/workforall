import {useState, useEffect} from "react"

import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import Favorite from "../Favorite/Favorite";
import Button from "../Button/Button";
import SiteNotFound from "../SiteNotFound/SiteNotFound";

export default function SingleCard() {
  const { id } = useParams();
  const { fetchData, favoriteData } = useSelector((state) => state)

  const [singleUser, setSingleUser] = useState([]);
  console.log(singleUser)
  useEffect(() => {

    const cachedSingleData = fetchData.filter((value) => value.id.toString() === id )
    setSingleUser(cachedSingleData[0])
  }, [fetchData, id]);

  if (singleUser === undefined || singleUser === [] )
    return <SiteNotFound />

  return (
    <>
      <Favorite localData={favoriteData}/>
      <section className="h-full w-full flex justify-center flex-col items-center my-10">
        <img className="h-96 w-96" alt={singleUser.login} src={singleUser.avatar_url} />
        <h4 className="singleCardText">{singleUser.login}</h4>
        <a className="singleCardText hover:underline" href={singleUser.html_url} target="_blank">To Github Repository</a>
        <a className="singleCardText hover:underline" href="/">Back To home</a>

        <Button id={singleUser.id} login={singleUser.login} avatar={singleUser.avatar_url} />
        </section>
    </>
  )
}