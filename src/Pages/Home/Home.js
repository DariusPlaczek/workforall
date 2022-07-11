import {useState, useEffect } from "react"
import axiosURL from "../axios";


function Home() {

  const [inputValue, setInputValue] = useState("dariusplaczek")
  const [searchUsers, setSearchUsers] = useState([])

  useEffect(() => {

    if (inputValue.length <= 3) {
      setSearchUsers([])
      return
    }

    const fetchData = async () => {
      try {
        const responseUsers = await axiosURL.get(`/search/users?q=${inputValue}`)
        setSearchUsers(responseUsers.data.items)
      } catch {
        console.log("error")
      }
    }

    fetchData().catch(console.error)

  }, [inputValue]);


  const searchInput = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  return (
    <>
      <form>
        <input type="text" onChange={(event) => searchInput(event)}/>
      </form>

      {searchUsers?.map((value, key) => (
        <p className="text-white" key={key}>{value.login}</p>
      ))}
    </>
  )
}

export default Home;