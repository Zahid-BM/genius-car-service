import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');


    useEffect(() => {
        const getToken = async () => {
            console.log(user)
            const email = user?.user?.email;
            if (email) {
                const { data /* destructured */ } = await axios.post('https://fierce-fortress-36985.herokuapp.com/login', { email /* in axios we must send data in object format */ });
                console.log(data);
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user])
    return [token];
};
export default useToken;