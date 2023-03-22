import Image from "next/image";
import { loadMenus, loadPosts,loadSlugPost, loadSlugCate } from "../../../lib/api";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import FooterOne from "../../components/footer/FooterOne";
import PostFormatAudio from "../../components/post/post-format/PostFormatAudio";
import PostFormatGallery from "../../components/post/post-format/PostFormatGallery";
import PostFormatQuote from "../../components/post/post-format/PostFormatQuote";
import PostFormatStandard from "../../components/post/post-format/PostFormatStandard";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import PostFormatVideo from "../../components/post/post-format/PostFormatVideo";
import PostSectionSix from "../../components/post/PostSectionSix";
import HeaderFive from "../../components/header/HeaderFive";
import WidgetNewsletter from "../../components/widget/WidgetNewsletter";
import WidgetPost from "../../components/widget/WidgetPost";
import TeamOne from "../../components/team/TeamOne";
import SectionTitleTwo from "../../components/elements/SectionTitleTwo";


const PostDetails = ({allPosts,relCate, allMenus,  allParams,  postSizeMd, postBgDark}) => {
    const parse = require('html-react-parser');
    const postcontent = parse(allParams.content);
    const valuesArray = JSON.parse(allParams.images);

    const relatedPost = allPosts.posts.filter(post => post.slug !==  allParams.slug && post.category.navName === allParams.category.navName);
    console.log(relatedPost);
    return ( 
        <>
        <HeadMeta metaTitle={allParams.title}/>
        <HeaderFive menuData = {allMenus}/>
        
        <Breadcrumb bNav={allParams.category.navName}  bCat={allParams.category.catName} bCatSlug={allParams.category.catSlug} aPage={allParams.title}/>
		
        <PostFormatQuote postData={allParams} allData={allPosts} />
        {relatedPost.length != 0 ?
            <div className="axil-our-team section-gap section-gap-top__with-text bg-grey-light-three">
                <div className="container">
                    <div className="axil-team-grid-wrapper">
                        <SectionTitleTwo title="Realted Posts"/>
                        <div className="row">
                            {relatedPost.slice(0, 6).map((data) => (
                                <div className="col-lg-4" key={data.slug}>
                                   <TeamOne data={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>: ""
        }
        <FooterOne />
        </>
     );
}
 
export default PostDetails;

export async function getStaticProps( context ) {
	const id = context.params.slug


	const post = await  loadSlugPost(id)
    const allParams = post.posts;


    const catId =  post.posts.category.catSlug.toString();

     const relCate = await loadSlugCate(catId)

	const allMenus = await loadMenus()
    const allPosts = await loadPosts()
    return {
        props: {
           
            allPosts, 
			allMenus, 
			allParams,
            relCate,
            catId
        }
    }
}



export async function getStaticPaths() {
	

	const allBlogs = await loadPosts()

	
	const paths = allBlogs.posts.map((post) => {
        return{
            params: {
                slug: post.slug.toString(),
            }
        };
	})

	return {
		paths,
		fallback: false,
	}
}
