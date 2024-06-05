import React, { useState, MouseEvent} from 'react';
import { DirectoryType, TDirectory } from '../../types/ExplorerTypes';
import ContextMenu from '../ContextMenu';


function Directory({file}:{file:TDirectory}){
const [isExpanded, setIsExpanded] = useState(false)
const [isSelected, setIsSelected] = useState(false)


const initalContextMenu = {
    show: false,
    x:0,
    y:0
}

const [contextMenu, setContextMenu] = useState(initalContextMenu)

const handleClick = ()=>{
    setIsExpanded(!isExpanded);
    if (file.type === DirectoryType.FILE)
    setIsSelected(!isSelected)
}

const handleContextMenuOpen = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
    event.preventDefault()
    const {pageX, pageY} = event
    if(file.type === DirectoryType.FILE )
    setContextMenu({show:true, x: pageX, y:pageY})
}

const handleCloseContextMenu = ()=> setContextMenu(initalContextMenu)

const handleOnContextMenuClick = (file:TDirectory, eventTriggered:string)=>{
    console.log(`Event ${eventTriggered}  triggered on File name : ${file.name} `)
}

return (
    <>
    <div className={`directory ${isSelected ? "active" : ""}`}>
    <div className='listing' onClick={()=>handleClick()} onContextMenu={handleContextMenuOpen}>
      {file.type === DirectoryType.FOLDER ? isExpanded ? "📂" : "📁" : ""}
      {file.name}
    </div>
    {isExpanded &&
      file.data?.map(_file => <Directory key={_file.name} file ={_file}/>)
    }
    </div>
    {contextMenu.show && 
    <ContextMenu 
    x={contextMenu.x} 
    y={contextMenu.y} 
    closeContextMenu={handleCloseContextMenu} 
    onCopy={()=>handleOnContextMenuClick(file, "EVENT_COPY")} 
    onDelete={()=>handleOnContextMenuClick(file, "EVENT_DELETE")} 
    onRename={()=>handleOnContextMenuClick(file, "EVENT_RENAME")} 
    />}
    </>
  );

}

export default Directory;