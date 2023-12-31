import React, { CSSProperties, FC } from 'react'
import NextLink from "next/link";
import { useRouter } from 'next/router';


const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
    
}

interface Props {
  texto: string,
  href: string
}
export const ActiveLink: FC<Props> = ({texto , href}) => {

    const {asPath} = useRouter()
  return (
    <NextLink style={ asPath === href ? style : undefined}  href={href}>{texto}</NextLink>
  )
}
