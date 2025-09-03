'use client';

import {ReactNode} from "react";

import Link from 'next/link';
import { usePathname } from "next/navigation";


export default function NavLink({href,children}:{
    href: string,
    children: ReactNode,
}){
    const path = usePathname();
    return (
        <Link className={path.startsWith(href)?'text-[orange]':''} href={href} >{children}</Link>
    );
}