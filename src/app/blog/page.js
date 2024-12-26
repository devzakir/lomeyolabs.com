"use client";

import { useState, useEffect } from "react";
import { Calendar, User } from 'lucide-react';
import supabaseClient from "../../../supabaseClient";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabaseClient
        .from("blogs")
        .select("*");

      if (error) {
        setError(error);
      } else {
        setBlogs(data);
      }
    };

    fetchBlogs();
  }, []);

  return (

    <div className="w-full px-4 py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-neutral-dark font-medium mb-2">News & Blogs</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest News Feed</h2>
          <p className="text-gray-600">Don't Miss Stay Updated with the Latest Articles and Insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((item, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-primary-500 transition-all duration-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span>{new Date(item.created_at).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-primary-500" />
                    <span>by Admin</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary-600 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
