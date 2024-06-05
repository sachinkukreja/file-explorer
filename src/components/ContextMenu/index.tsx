import React, { useRef} from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

interface ConTextMenuProps{
    x:number,
    y:number,
    closeContextMenu : ()=> void;
    onCopy : () =>void;
    onDelete: ()=>void;
    onRename: ()=> void;
}

function ContextMenu({x,y, closeContextMenu, onCopy, onDelete,onRename }:ConTextMenuProps) {

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, closeContextMenu)
  
    return (
    <div 
    ref={ref}
    className='context-menu' 
    style={{top:`${y}px`, left:`${x}px`}}>
   <p onClick={onCopy}>Copy</p>
   <p onClick={onDelete}>Delete</p>
   <p onClick={onRename}>Rename</p>
    </div>
  );
}

export default ContextMenu;
