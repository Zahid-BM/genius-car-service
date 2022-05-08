import { useEffect, useState } from "react";

const UseServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fierce-fortress-36985.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices];
};
export default UseServices;