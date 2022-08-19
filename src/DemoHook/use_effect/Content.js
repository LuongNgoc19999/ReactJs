import { useEffect, useState } from "react";

//1. useEffect(callback)
// - goij mooix khi compoment re-render
// - goi callback sau khi component them vao dom

//2. useEffect(callback, [])
// - chi goi callback 1 lan sau khi component mounted

//3. useEffect(callback, [value])
// - callback se duoc goi laji moi khi deps thay doi

const tabs = ['posts', 'comments', 'albums']
function Content(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts =>{
            setPosts(posts);
        })
    }, [type])
    return(
        <div>
            {tabs.map(tab=>(
                <button
                    style={type === tab ? {
                        color:'#fff',
                        backgroundColor:'#333'
                    } : {}} 
                    key={tab} onClick={()=>setType(tab)}>
                    {tab}
                </button>
            ))}
            <input value={title} onChange={e => setTitle(e.target.value)}/>
            <ul>
                {
                    posts.map(post =>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}
export default Content;