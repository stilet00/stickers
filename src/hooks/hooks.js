import {useState} from "react";

export function useAsync(callback, defaultValue = []) {
    const [data, setData] = useState(defaultValue);
    function run() {
        callback().then(data => {
            setData(data.reverse())
            return data
        })
            .catch(err => console.log(err))
    }
    return {
        data,
        setData,
        run
    }
}