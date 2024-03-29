import { useEffect, useState } from "react";

const useServiceDetails = serviceId => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://genius-car-services.onrender.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    
    return [service, setService];
};
export default useServiceDetails;