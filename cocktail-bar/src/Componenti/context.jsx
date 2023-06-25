import React, { useState, useContext, createContext } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    //state per la sidebar 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openSidebar = () => setIsSidebarOpen(true);

    const closedSidebar = () => setIsSidebarOpen(false);

    //state per l'input 
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    const handleClick = () => {
        setQuery(search)
    }


    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            openSidebar,
            closedSidebar,
            search,
            handleChange,
            handleSubmit,
            query,
            handleClick,
        }}
        >{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { useGlobalContext, AppProvider }