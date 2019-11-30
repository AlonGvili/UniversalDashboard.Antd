import React, { Suspense } from 'react'
const useSuspense = (Component, Fallback) => {
    return <Suspense fallback={<Fallback/>}>
            <Component />
        </Suspense>
}

export default useSuspense
