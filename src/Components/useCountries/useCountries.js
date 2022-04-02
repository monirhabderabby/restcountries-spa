import { useEffect, useState } from "react"

const useCountries = () =>{
    const [countries, setCountries] = useState([])

    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data=> setCountries(data))
    }, [])

    return [countries, setCountries]
}

export default useCountries;