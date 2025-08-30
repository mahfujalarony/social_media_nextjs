import React from 'react'
import Navbar from '@/Components/Navbar';
import Left from '@/Components/Left';
import Right from '@/Components/Right';
import CreatePost from '@/Components/CreatePost';

const page = () => {
  return (
        <div className="grid grid-cols-12 gap-4">
            <div className="hidden md:block md:col-span-3 bg-gray-100 p-4">
                <Left />
            </div>

            <div className="col-span-12 md:col-span-6 bg-white p-4">
                <Navbar />
                <CreatePost />
            </div>

            <div className="hidden md:block md:col-span-3 bg-gray-100 p-4">
                <Right />
            </div>
        </div>

    )
}

export default page
