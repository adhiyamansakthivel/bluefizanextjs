import { loadMenus, loadPosts,loadSlugPost, loadSlugCate, loadCate } from "../../../lib/api";
import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import { slugify } from "../../utils";
import HeadMeta from "../../components/elements/HeadMeta";
import AdBanner from "../../components/common/AdBanner";
import WidgetAd from "../../components/widget/WidgetAd";
import WidgetSocialShare from "../../components/widget/WidgetSocialShare";
import WidgetPost from "../../components/widget/WidgetPost";
import PostLayoutTwo from "../../components/post/layout/PostLayoutTwo";
import WidgetCategory from "../../components/widget/WidgetCategory";
import HeaderTwo from "../../components/header/HeaderTwo";
import MetaDataThree from "../../components/post/post-format/elements/meta/MetaDataThree";
import HeaderFive from "../../components/header/HeaderFive";


const PostCategory = ({allMenus, relCate,  allPosts }) => {
    const cateContent = relCate.category;

    return (
        <>
            <HeadMeta metaTitle={`${cateContent.navName} | ${cateContent.catName}`}
            
            
            />

            <HeaderFive menuData = {allMenus}/>
            <Breadcrumb bNav={cateContent.navName}    aPage={cateContent.catName}/>

            {/* Banner Start here  */}
            
            <MetaDataThree metaData={cateContent} />
            {/* Banner End here  */}
            <div className="random-posts section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="axil-content">
                                {relCate.posts.map((data) => (
                                    <PostLayoutTwo data={data}  key={data.slug}/>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="post-sidebar" >
                                <WidgetPost dataPost={allPosts} style={{position:"fixed"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
}

export default PostCategory;


export async function getStaticProps( context ) {

    const catId =   context.params.slug

     const relCate = await loadSlugCate(catId)


	const allMenus = await loadMenus()



    const allPosts = await loadPosts()


    return {
        props: {
           
            allPosts, 
			allMenus, 
            relCate,
            catId
        }
    }
}



export async function getStaticPaths() {
	

	const allCategs = await loadCate()

	
	const paths = allCategs.categories.map((cate) => {
        return{
            params: {
                slug: cate.catSlug.toString(),
            }
        };
	})

	return {
		paths,
		fallback: false,
	}
}
