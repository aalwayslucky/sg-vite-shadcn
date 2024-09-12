import { atom, useAtom } from "jotai";
import { Button } from "./ui/button";


const whateverAtom = atom(0)

const YourApp = () => {
    const [whatever, setWhatever] = useAtom(whateverAtom);
    return (<div className="space-y-2">

        <p>{whatever}</p>
        <Button className="font-bold" variant={'destructive'} size={'lg'} onClick={() => setWhatever((prev) => prev + 1)}>
            Click Me to Increase
        </Button>

    </div>)
}
export default YourApp;