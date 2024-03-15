import { useEffect, useState } from "react"

export function IncrementalComponent() {
    const [value, setvalue] = useState(0);
    useEffect(() => {
        const intervalRef = setInterval(() => {
            setvalue(value => value + 1)
        }, 1000)

        return () => {
            // Per interrompere setInterval bisogna passare clearInterval(/*riferimento al numero che setInterval lascia*/);
            clearInterval(intervalRef);
        }
    }, []);

    return <>
        <div>Interval value: {value}</div>
    </>
}