import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))

  return posts
}

export async function loadPosts() {
 
  const res = await fetch(`${process.env.GET_POSTS}`)
  const posts = await res.json()


  return posts
}


export async function loadSlugPost(id) {
 
  const res = await fetch(`${process.env.GET_POSTS_ID}${id}`)
  const post = await res.json()

  return post
}

export async function loadSlugCate(catId) {
 
  const res = await fetch(`${process.env.GET_CATEGORIES_ID}${catId}`)
  const cate = await res.json()


  return cate
}

export async function loadCate() {
 
  const res = await fetch(`${process.env.GET_CATEGORIES}`)
  const cates = await res.json()


  return cates
}

export async function loadMenus() {
 
  const res = await fetch(`${process.env.GET_NAVIGATIONS}`)
  const navigations = await res.json()


  return navigations
}

// Get Markdown File Content 

export function getFileContentBySlug(fileName, postsPath) {

    const postFilePath = join(postsPath, `${fileName}.md`)
    const fileContents = fs.readFileSync(postFilePath, 'utf8')

    const { data, content } = matter(fileContents)

    return {
      data,
      content
    }
}





 


