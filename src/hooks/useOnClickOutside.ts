import { RefObject, useEffect } from 'react';

type Event = MouseEvent

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref : RefObject<T>,
    callback : (event:Event) =>void
)=>{
    useEffect(()=>{
        const listner = (event:Event) =>{
            const element = ref?.current
            if (!element || element.contains((event.target as Node)|| null)){
                return;
            }
            callback(event)
        }
        document.addEventListener('mousedown', listner);

        return () => {
            document.removeEventListener('mousedown', listner);
        }
       
    },[ref,callback])
}
