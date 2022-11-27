import { Button } from '@mantine/core';

import Link from 'next/link';

//@ts-ignore
export function BtnLink({ name, link }) {
    return (
        <>
            <Link href={link}>
                <Button component='a'>{name}</Button>
            </Link>
        </>
    )
}