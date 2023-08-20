import React from 'react'
import { AiOutlineFolder, AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

export default function other() {
  return (
    <div className='max-w-[1100px] mx-auto h-[auto] my-10 md:h-[90vh]'>
        <h1 className=' text-[40px] text-[white] my-20'>Other works</h1>
        <div className=' md:flex flex-row justify-around p-2 max-w-[1100px] mx-auto text-[white]'>
        <div id='appcolor' className=' p-5 w-[100%]  md:w-[30%] hover:-translate-y-5 duration-200 ease-in-out  my-10  flex shadow-2xl    rounded-lg flex-col  items-center'>
            <div className=' gap-20 m-5 text-[30px] flex flex-row'>
                <AiOutlineFolder/>
                <a href='https://github.com/shivamkumarsha'><AiFillGithub/></a>


            </div>
            <h1 className='m-3 font-bold text-[25px]'><a href='https://github.com/shivamkumarsha'>Github Projects</a></h1>
                <div className='flex m-3 gap-5 flex-row justify-between'>
                    <h1>HTML/CSS</h1>
                    <h1>Javascript</h1>
                    <h1>React</h1>
                </div>


        </div>


        <div id='appcolor' className=' p-5 w-[100%]  md:w-[30%] hover:-translate-y-5 duration-200 ease-in-out  my-10  flex shadow-2xl    rounded-lg flex-col  items-center'>
            <div className=' gap-20 m-5 text-[30px] flex flex-row'>
                <AiOutlineFolder/>
                <a href='https://firemman.000webhostapp.com/'><AiOutlineGlobal/></a>


            </div>
            <h1 className='m-3 font-bold text-[25px] '><a href='https://firemman.000webhostapp.com/'>FIRE PROTECTION</a></h1>
                <div className='flex m-3 gap-5 flex-row justify-between'>
                    <h1>HTML/CSS</h1>
                    <h1>Javascript</h1>
                    <h1>React</h1>
                </div>


        </div>


        <div id='appcolor' className=' p-5 w-[100%]  md:w-[30%] hover:-translate-y-5 duration-200 ease-in-out  my-10  flex shadow-2xl    rounded-lg flex-col  items-center'>
            <div className=' gap-20 m-5 text-[30px] flex flex-row'>
                <AiOutlineFolder/>
                <a href='https://loquacious-pie-15277d.netlify.app/'><AiOutlineFolder/></a>


            </div>
            <h1 className='m-3 font-bold text-[25px]'><a href='https://loquacious-pie-15277d.netlify.app/'>Other Projects</a></h1>
                <div className='flex m-3 gap-5 flex-row justify-between'>
                    <h1>HTML/CSS</h1>
                    <h1>Javascript</h1>
                    <h1>React</h1>
                </div>


        </div>


        </div>

    </div>
  )
}
