import { useState } from "react"
import { EXPLORER_DATA } from "./constants/ExplorerData"
import Folder from "./components/Folder"

export default function App() {
  const [explorer, setExplorer] = useState(EXPLORER_DATA);

  // doing dfs on our graph
  
  function traverse(node,name, isFolder, currentNode) {
    console.log("currentNode*", currentNode.id===node.id);
      if(node.id === currentNode.id) {
        console.log("here");
        if (!currentNode.items) {
          currentNode.items = [];
        }
        currentNode.items.push({
          id: Date.now(),
          isFolder: isFolder, 
          name: name,
        });
       
        console.log("currentNode", currentNode.items);
        return currentNode;
      }
      
      let newItems = [];
       newItems = currentNode.items?.map((curr) => {
        curr =  traverse(node, name, isFolder, curr);
        return curr;
      });
      

      console.log("new items", newItems);
      
      return {...currentNode, items: newItems }; 
  }

  function onAddEnter(node, name, isFolder) {
    console.log("node enter", node);
    const newTree = traverse(node, name, isFolder, explorer);
    setExplorer(newTree);
}

console.log("tree", explorer);
  return (
  <>
  {explorer.items?.map((node) => {
    return (<div class="folder-container">
    <Folder node={node} marginLeft={4} onAddEnter={onAddEnter}/>
    </div>)
  })}
  </>
 )
}