import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd';
import DefaultLayout from '../components/DefaultLayout';
export default function Home() {
  return(
    <div>
      <Head>
        <title>Resume Builder</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
      </Head>
      <DefaultLayout>
        <h1>This is home page!!</h1>
      </DefaultLayout>
    </div>
  )
}
