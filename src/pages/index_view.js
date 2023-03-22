import { loadPosts, loadMenus } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderTwo from "../components/header/HeaderTwo";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionSeven from "../components/post/PostSectionSeven";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import SliderOne from "../components/slider/SliderOne";
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

