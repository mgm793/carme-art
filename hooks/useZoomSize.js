import { useMemo } from "react";

export function useZoomSize(size, padding){
  let [width, height] = [size, size];
  
  const clientWidth = useMemo(() => {
    return window.innerWidth;
  }, []);

  if(clientWidth <= size + (padding * 2)){
    const newSize = clientWidth - (padding * 2);
    return {width: newSize, height: newSize};
  }

  return {width, height}
}