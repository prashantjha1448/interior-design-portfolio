import { createContext, useState } from "react";
import img1 from "../assets/iamge1.avif"
import img2 from "../assets/iamge6.avif"
import img3 from "../assets/iamge3.avif"
import img4 from "../assets/iamge4.avif"

export const Data = createContext()

export const DataContextProvider = ({children})=>{
    const [workData, setWorkData] = useState([
  { id: 1, title: "Modern Kitchen", image: img1 },
  { id: 2, title: "Luxury Bedroom", image: img2 },
  { id: 3, title: "Office Setup", image: img3 },
  { id: 4, title: "Living Room", image: img4 },
])

    return <Data.Provider value={{workData , setWorkData}}>
        {children}
    </Data.Provider>
}
