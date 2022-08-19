import { useState } from "react";

function TodoList(){
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(storageJobs)

    const handleSubmit = () =>{
        if(job != ''){
            setJobs(prev => {
                const newJobs = [...prev, job]

                //save jobs to local storage
                const jsonJobs = JSON.stringify(newJobs)
                localStorage.setItem('jobs', jsonJobs)
                return newJobs
            });
            setJob('')
        }
    }
    return (
        <div className="TodoList" style={{ padding:20}}>
            <h1>TodoList</h1>
            <input value={job} onChange={e => setJob(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index)=>(
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;