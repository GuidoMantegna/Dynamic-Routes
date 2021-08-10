import React from 'react'

type Context = {
    id: string
    // handleId: (id: string) => void
}

const IdContext = React.createContext<Context>({id: ''});

export const IdProvider = IdContext.Provider;

export default IdContext;