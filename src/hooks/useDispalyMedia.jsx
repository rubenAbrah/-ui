import { useEffect, useState } from "react";
function useDispalyMedia(){
const query = 991;
const [match, setMatch] = useState(window.innerWidth > query); 

function onChange() {
  setMatch(window.innerWidth > query); 
}

useEffect(() => {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}, [window.innerWidth])
return match
}
export {useDispalyMedia}