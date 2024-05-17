import React from 'react'
import { Link } from 'react-router-dom'
import {format, formatISO9075} from 'date-fns';

const Post = ({_id, title, summary, cover, content, createdAt, author}) => {
  return (
    <div>


    <div className="post">
    <div className="image">
      <Link to={`/post/${_id}`}>
    <img src={'https://myblogsforall.onrender.com/' + cover} alt="" />
    </Link>
    </div>
    <div className="texts">
    <Link to={`/post/${_id}`}>
    <h2>
      {title}
    </h2>
    </Link>
    <p className="info">
      <Link to="" className="author">{author.username}</Link>
      <time dateTime="">{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
    </p>
    <p className='summary'>
    {summary}
    </p>
    </div>
    
  </div>
   {/* <div>
      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the Blog</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={'http://localhost:4000/' + cover} alt="" />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <Link to={`/post/${_id}`} className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        {title}
                    </Link>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        {author.username}
                    </p>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        {summary}
                    </p>

                    <p className="mt-3 text-sm text-blue-500"><time dateTime="">{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time></p>
                </div>
            </div>

            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        How to use sticky note for problem solving
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
            </div>
        </div>
    </div>
</section>
    </div> */}

  
  </div>
  )
}

export default Post
