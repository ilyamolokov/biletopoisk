'use client'
import { FunctionComponent, useState } from "react"
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export const StoreProvider = ({ children }: any) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}
