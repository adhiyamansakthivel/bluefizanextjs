import { loadPosts, loadMenus } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";

import PostSectionThree from "../components/post/PostSectionThree";


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

