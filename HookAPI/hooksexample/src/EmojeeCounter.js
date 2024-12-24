import React,{useState,useEffect} from 'react'
import love from './Love.png';
import like from './like.png';
import sad from './sad.png';

function EmojeeCounter(props) {
    const [pic, setPic]=useState(love)
    const [count, setCount]=useState(0)
useEffect(()=>{
if (props.pic==="Love")
    setPic(love)
else if (props.pic==="like")
    setPic(like)
else if (props.pic==="sad")
    setPic(sad)

}
)
const ClickHandle=()=>{
setCount(count+1)
}

return (
    <div>
{props.pic} <span></span>
<button onClick={ClickHandle}>
    {count}
    <img src={pic} alt=""/>
</button>



    </div>
)
}
export default EmojeeCounter