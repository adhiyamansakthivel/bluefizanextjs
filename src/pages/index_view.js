import { loadPosts, loadMenus } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderTwo from "../components/header/HeaderTwo";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionTwo from "../components/post/PostSectionTwo";


const HomeTwo = ({allBlogs, allMenus}) => {

  return ( 
    <>
    <HeadMeta metaTitle="Home Two"/>
    <HeaderTwo menuData = {allMenus}/>
    <PostSectionTwo postData={allBlogs} />
    {/* <PostSectionThree postData={allBlogs} /> */}
    <PostSectionFive postData={allBlogs} adBanner={true} />

    {/* <PostSectionSix postData={allPosts}/> */}
    <FooterOne />
    </>
   );
}
 
export default HomeTwo;


export async function getStaticProps() {


  const allBlogs = await loadPosts()

  const allMenus = await loadMenus()
  
  return {
    props: { allBlogs, allMenus }
  }
}

