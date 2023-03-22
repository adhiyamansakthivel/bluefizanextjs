/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images : {
    domains : ['sangw.in', 'localhost', 'picsum.photos'] // <== Domain name
  },
  env:{
    GET_POSTS: 'http://localhost:8000/api/get-posts',
    GET_POSTS_ID: 'http://localhost:8000/api/get-post/',
    GET_CATEGORIES:'http://localhost:8000/api/get-categories',
    GET_CATEGORIES_ID: 'http://localhost:8000/api/get-category/',
    GET_NAVIGATIONS: 'http://localhost:8000/api/get-navigations',
    GET_IMAGES: 'http://localhost:8000/blogImages/',

  },
}

module.exports = nextConfig
