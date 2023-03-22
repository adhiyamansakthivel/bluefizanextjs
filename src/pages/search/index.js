import {useState} from 'react'
import { loadMenus, loadPosts,loadSlugPost, loadSlugCate } from "../../../lib/api";
import { useRouter } from 'next/router';
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
import Offcanvas from 'react-bootstrap/Offcanvas';

const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }


const SearchPost = ({allMenus, allBlogs, action = '/search'}) => {
    const router = useRouter();
    const { post } = router.query;
    const postValue = post?.toLowerCase();
    
    const searchData =
    allBlogs.posts.filter(
        data => {
          return (
            data
            .title
            .toLowerCase()
            .includes(postValue) 
           
          );
        }
      ); 
    


      const [query, setQuery] = useState(post)
  
     const handleParam = setValue => e => setValue(e.target.value)
  
     const handleSubmit = preventDefault(() => {
          router.push({
          pathname: action,
          query: {post: query},
        })
     })


    

    return (
        <>
            <HeadMeta metaTitle="Search Page"/>

            <HeaderFive menuData = {allMenus}/>
            <Breadcrumb aPage="Search Page"    />
            <div className="banner banner__default bg-grey-light-three">
                <div className="container">
                <form onSubmit={handleSubmit} className={`navbar-search show-nav-search`}>
								<div className="search-field">
									<input
										type="text"
										className="navbar-search-field"
										placeholder="Search Here..."
										name="post"
                                        value={query} onChange={handleParam(setQuery)}

									/>
									<button className="navbar-search-btn" type="button">
									<i className="fal fa-search" />
									</button>
								</div>
								
							</form>
                </div>
            </div>
           

            {/* Banner Start here  */}

            {/* Banner End here  */}
            <div className="random-posts section-gap">
                <div className="container">
                

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="axil-content">
                                {searchData?.map((data) => (
                                    <PostLayoutTwo data={data}  key={data.slug}/>
                                ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="post-sidebar" >
                                <WidgetPost dataPost={allBlogs} style={{position:"fixed"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
}

export default SearchPost;



export async function getStaticProps() {


	const allBlogs = await loadPosts()
  
	const allMenus = await loadMenus()
	
	return {
	  props: { allBlogs, allMenus }
	}
  }
  

