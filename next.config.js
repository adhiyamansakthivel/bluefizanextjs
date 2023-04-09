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
    domains : ['sangw.in', 'localhost', 'picsum.photos', '3.108.76.77' ] // <== Domain name
  },
  env:{
    GET_POSTS: 'http://3.108.76.77/api/get-posts',
    GET_POSTS_ID: 'http://3.108.76.77/api/get-post/',
    GET_CATEGORIES:'http://3.108.76.77/api/get-categories',
    GET_CATEGORIES_ID: 'http://3.108.76.77/api/get-category/',
    GET_NAVIGATIONS: 'http://3.108.76.77/api/get-navigations',
    GET_IMAGES: 'http://3.108.76.77/blogImages/',

  },
}

module.exports = nextConfig
