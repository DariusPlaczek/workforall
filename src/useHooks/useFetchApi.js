import {useState, useEffect} from "react";

import axiosURL from "../axios";
import {addData} from "../store";
import {useDispatch} from "react-redux";

const useFetchApi = ( inputUser, inView ) => {

    const dispatch = useDispatch();
    const [searchUsers, setSearchUsers] = useState([])
    const [users, setUsers] = useState(10)
    const [error, setError] = useState(false)

    useEffect(() => {

        if (inputUser.length <= 2) {
            return
        }

        const fetchData = async () => {
            try {
                const responseUsers = await axiosURL.get(`/search/users?q=${inputUser}&per_page=${users}`)
                setSearchUsers(responseUsers.data.items)
                dispatch(addData(responseUsers.data.items))
            } catch {
                setError(true)
            }
        }

        fetchData().catch(console.error)

    }, [inputUser, users, dispatch]);

    useEffect(() => {

        if (inView) {
            setUsers((pref) => pref + 4)
        }

    }, [inView]);

    return {searchUsers, error}
}

export default useFetchApi;