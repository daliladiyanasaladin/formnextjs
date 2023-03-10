import Head from 'next/head';
import { BiPlus } from 'react-icons/bi'
import Form from '@/components/form';
import { useState } from 'react';


export default function Home() {

const [visible, setVisible] = useState(false);

const handler = () => {
  setVisible(!visible)
}

  return (
    <>
    <section>
      <Head>
        <title>Simple Form</title>
        <meta name="description" content="Generated by create next app" />
       
      </Head>
      <main className='py-5'>
      <h1 className='text-xl md:text-5xl text-center font-bold py-10'>
      Simple Form
    </h1>
    <div className="container mx-auto flex justify-between py-5 border-b">
      <div  className="left flex gap-3">
        <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-indigo-50 hover:border-indigo-500 hover:text-gray-800'>
          Add<span className="px-1"><BiPlus size={24}></BiPlus></span>
        </button>
      </div>
    </div>
   
     {visible ? <Form></Form>: <></>}
  
      </main>
      </section>
    </>
  )
}
