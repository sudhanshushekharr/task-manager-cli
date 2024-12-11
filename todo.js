const fs=require('fs');
const filePath="./tasks.json";


const loadTasks=()=>{
  try {
    //reading a file
    const dataBuffer=fs.readFileSync(filePath);
    const dataJSON=dataBuffer.toString();
    return JSON.parse(dataJSON);
    //to read readfilesynckaro ye tumhe data buffer de dega use tostring() use krke dataJSON me convert kro and then is dataJSON ko JSON me convert karo
  } catch (error) {
    return [];
  }
}

const saveTasks=(tasks)=>{
    //writing to filesystem
const dataJSON=JSON.stringify(tasks)
fs.writeFileSync(filePath,dataJSON);
console.log("Task added ",tasks);
}


const addTask = (task)=>
{
  const tasks=loadTasks();
  tasks.push({task});
  saveTasks(tasks);
  
  
}

const listTasks=()=>
{
    const tasks=loadTasks();
    tasks.forEach((task,index)=>console.log(`${index+1}-${task.task}`)
    );
};

const removeTask=(taskIndex)=>{
    const tasks=loadTasks();
    if(taskIndex<0 || taskIndex>tasks.length)
    {
        console.log("Invalid task number");
        return;
    }
    else
    {
        tasks.splice(taskIndex-1,1);
        saveTasks(tasks);
        console.log(`Task ${taskIndex} removed successfully.`);
    }

}
const command= process.argv[2];
const argument=process.argv[3];

if(command==='add')
{
    addTask(argument);
}
else if(command==='list')
{
    listTasks();
}
else if(command==='remove')
{
    removeTask(parseInt(argument));
}
else
{
    console.log("command not found");
    
}