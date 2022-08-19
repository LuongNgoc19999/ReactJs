import { useEffect, useState } from "react";
import Content from "./Content";
function DemoUseEffect(){
    const [show, setShow] = useState(false)

    return (
        <div className="DemoUseEffect" style={{ padding:20}}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content/>}
        </div>
    );
}
export default DemoUseEffect;