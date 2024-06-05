import React, { useState, useEffect } from 'react';
import { FILES } from '../../testData';
import Directory from '../Directory';

function Explorer() {

    const [files, setFiles] = useState(FILES)

  return (
    <div>
       Sachin's File Explorer
       <Directory file={files} />
    </div>
  );
}

export default Explorer;
