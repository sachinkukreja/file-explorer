import React, { useState, useEffect } from 'react';
import { TDirectory } from '../../types/ExplorerTypes';


function Directory({file}:{file:TDirectory}){
const [isExpanded, setIsExpanded] = useState(false)
return (
    <div className='directory'>
    <div  onClick={()=>setIsExpanded(!isExpanded)}>
      {file.type === 'folder' && "📁"}
      {file.name}
    </div>
    {isExpanded &&
      file.data?.map(_file => <Directory file ={_file}/>)
    }
    </div>
  );

}

export default Directory;