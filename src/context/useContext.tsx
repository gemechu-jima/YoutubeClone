import { useContext, createContext, ReactNode , useState} from "react";

export interface YoutubeType {
  iconClick: boolean;
};


interface GlobalContextProviderProps {
  children: ReactNode;
}
const GlobalContext = createContext<any>(null);

function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [iconClick, setIconClick]=useState<boolean>(true)// Provide a default value or state here
  const handleClick=()=>{
    setIconClick(prev=>!prev)
}
    return (
    <GlobalContext.Provider value={{iconClick, setIconClick, handleClick}}>
      {children}
    </GlobalContext.Provider>
  );
  }
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === null) {
      throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
  };
export default GlobalContextProvider;
