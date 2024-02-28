import { useState } from "react";

interface propsy{
    desc: string;
}

export default function Description(props: propsy) {
   const [height, setHeight] = useState();
    return (
        <p>
            {props.desc}
        </p>
    )
}
