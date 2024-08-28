import React from 'react'
import Comment from './Comment'

const AllComments = () => {
  return (
    <article className="relative grid gap-4 max-h-[450px] overflow-y-scroll ">
        <Comment name={"Yefry Sanchez"} createdAt={"Feb. 8, 2022"} comment={"Very straight-to-point article. Really worth time reading. "} />
        <Comment name={"Yefry Sanchez"} createdAt={"Feb. 8, 2022"} comment={"Very straight-to-point article. Really worth time reading. "} />
        <Comment name={"Yefry Sanchez"} createdAt={"Feb. 8, 2022"} comment={"Very straight-to-point article. Really worth time reading. "} />
        <Comment name={"Yefry Sanchez"} createdAt={"Feb. 8, 2022"} comment={"Very straight-to-point article. Really worth time reading. "} />
        <Comment name={"Yefry Sanchez"} createdAt={"Feb. 8, 2022"} comment={"Very straight-to-point article. Really worth time reading. "} />
        <Comment name={"Yefry Sanchez"} createdAt={"Feb. 8, 2022"} comment={"Very straight-to-point article. Really worth time reading. "} />
        <div className='sticky left-0 bottom-0 w-full h-14 bg-gradient-to-t from-white to-transparent'></div>
   
    </article>
  )
}

export default AllComments