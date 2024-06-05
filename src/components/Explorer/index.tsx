import React, { useState } from 'react';
import { FILES } from '../../testData';
import Directory from '../Directory';

function Explorer() {

    const [files, setFiles] = useState(FILES)

  return (
    <>
    <h1>Sachin's File Explorer</h1>
    <div className='explorer'>
       <Directory file={files} />
    </div>
    
    </>
  );
}

export default Explorer;
