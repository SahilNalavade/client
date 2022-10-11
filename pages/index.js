import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd';
export default function Home() {
  return(
    <div>
      <h1>Resume Builder</h1>
      <Button type="primary">Primary Button</Button>
    </div>
  )
}
