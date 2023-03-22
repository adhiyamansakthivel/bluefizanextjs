import { loadPosts, loadMenus } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionFour from "../components/post/PostSectionFour";
import PostSectionOne from "../components/post/PostSectionOne";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import PostSectionTwo from "../components/post/PostSectionTwo";
import { useEffect, useState } from "react";

const HomeOne = ({allBlogs, allMenus}) => {
  //console.log(allMenus);
   return ( 
    <>
    <HeadMeta metaTitle="Home One"/>
    <HeaderOne menuData = {allMenus}/>
    <PostSectionThree postData={allBlogs} />
    
    <FooterOne />
    </>
   );
};


 
export default HomeOne;


export async function getStaticProps() {


  const allBlogs = await loadPosts()

  const allMenus = await loadMenus()
  
  return {
    props: { allBlogs, allMenus }
  }
}

