'use client'; // This is a client component

// import { Provider } from 'react-redux';
// import { store } from '@/app/store/store';

import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'


export default function Providers({ children }: { children: React.ReactNode }) {
    const store = makeStore();
    return <Provider store={store}>{children}</Provider>;
}
