import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [title,setTitle]=useState("");
  const [desc,setDescription]=useState("");
  const [editId, setEditId
  ] = useState('')
  const [arr,setArr]=useState([
    {
      id: Math.random(),
      Title:"For A Walk",
      Description:"7:30 A.M"
    }
    

  ])
  return (
    <div className="App">
      <div>
        <div className="bg-gray-500 h-full w-full p-4 w-4">
          <div className="">
            <h1 className="text-red-600 text-2xl">T0-DO LIST</h1>
            <br></br>
            <input
              type="text"
              className="p-2 m-3 bg-black text-blue-600 rounded-lg"
              placeholder="TITLE"
              value={title}
              onChange={(e)=>
              {setTitle(e.target.value)}}
            ></input>
            <br></br>
            <input
              type="text"
              className="p-2 m-3  bg-black text-blue-600 rounded-lg"
              placeholder="DESCRIPTION"
              value={desc}
              onChange={(e)=>{
                setDescription(e.target.value)}}
              
            ></input>
             <br></br>
            <button class=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-black mt-2" onClick={()=>
            {
              // if(editId){
              //   setArr(arr.filter((value)=>{
              //     console.log('done');
              //     return value !==editId
              //   }))
              // }
              title && desc !== ""
              ?

               setArr(
                  arr.concat({
                    id: Math.random(),
                    
                    
                    Title: title,
                    Description: desc,
                  })
                )
              : alert("please enter both Title and Description");

            setTitle("");
            setDescription("");
           
            // setEditId('')
            }
            }>
              ADD TASK
            </button>
            
            <hr></hr>
          </div>
          <div>
            <div>
              <div className="bg-white h-full w-full rounded-2xl m-2 p-2">
                <h1 className="text-red-500 text-2xl">TASKS</h1>
                {arr.map((val)=>(  <div className="bg-gray-300 rounded-2xl sm:w-full lg:w-96  mx-auto flex justify-between m-2 p-4 ">
                  <div className="">
                    <div className="flex gap-2">
                    <i class="fa-solid fa-check text-xl text-blue-700"></i>
                    <h1>{val.Title}</h1>
                    </div>
                   <h2 className="text-red-600">{val.Description}</h2>
                    
                  </div>
                  
                  <div className="flex gap-4">
                  <i class="fa-solid fa-pen-to-square text-yellow-800" onClick={()=>{
                    setTitle(arr.find((val1)=> val1.id=== val.id).Title)
                    setDescription(arr.find((val1)=>val1.id==val.id).Description)
                  setEditId(val?.id)
                    
                  }}></i>
                  <i class="fa-solid fa-trash text-red-800" onClick={()=>{
                    setArr(arr.filter((val1)=> val1.id !== val.id))
                  }}></i>
                  </div>
                </div> ))}

               

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
