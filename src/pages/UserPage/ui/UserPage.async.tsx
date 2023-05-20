import { lazy } from 'react';

export const UserPageAsync = lazy(
    () => new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import('./UserPage'));
        }, 1500);
    }),
);
