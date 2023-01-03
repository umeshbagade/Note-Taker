import './ListNotes.css';
const ListNotes = (props) => {

   

    return (  
        <div className="tasks">
            {props.tasks.map((task)=>{
                return <div className="task-details" key={task.id} 
                onClick={
                    (e) =>{
                        props.deleteTask(task.id)
                    }
                }
                >
                    <p>{task.name}</p>
                </div>
            })}
        </div>
    );
}
 
export default ListNotes;