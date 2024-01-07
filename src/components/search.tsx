"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import Input from './ui/input-ui';

type SearchProps = {
  baseUrl: string
}

const Search = (props: SearchProps) => {
  const router = useRouter()
  const [text, setText] = useState('');

  useEffect(() => {
    router.replace(`${props.baseUrl}?search=${text}`)
  }, [text, router, props.baseUrl])

  return (
    <Input 
      type='text'
      label='Search' 
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Search...'
    />
  )
}

export default Search