import { useState } from 'react';
import './Folder.css'
export default function Folder({node, marginLeft, onAddEnter}) {
     
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false
  });

  function onAddClick(isFolder, event) {
     setShowInput({...showInput, isVisible: true, isFolder: isFolder});
   }

   function onInputEnter(isFolder, event) {
    if(event.keyCode === 13) {
      setShowInput({...showInput, isVisible: false});
      onAddEnter(node, event.target.value, isFolder )
    }
   }
   
  
   return (
    <div style={{marginLeft: `${marginLeft}px`}}>
     <div class="info">
     <div>{node.isFolder ? "🗂️" : "🗄️"}
        <span>{node.name}</span>
     </div>
     {node.isFolder ? <button class='add-button' onClick={(event) => onAddClick(true, event)}>Add 🗂️</button> : <></>}
     {node.isFolder ? <button class='add-button' onClick={(event) => onAddClick(false, event)}>Add 🗄️</button> : <></>}
     </div>
     {showInput.isVisible ? <input placeholder="Enter File/Folder name" onKeyDown={(event) => onInputEnter(showInput.isFolder, event)}/> : <></>}
     
      {node.items && node.items.map((nestedNode)=> {
         return <Folder node={nestedNode} marginLeft={marginLeft+6} onAddEnter={onAddEnter}/>
      })}
    </div>
   )
}