import Image from "next/image";
import WidgetAd from "../../widget/WidgetAd";
import WidgetInstagram from "../../widget/WidgetInstagram";
import WidgetNewsletter from "../../widget/WidgetNewsletter";
import WidgetPost from "../../widget/WidgetPost";
import WidgetSocialShare from "../../widget/WidgetSocialShare";
import MetaDataFour from "./elements/meta/MetaDataFour";
import PostAuthor from "./elements/PostAuthor";
import PostComment from "./elements/PostComment";
import SocialShareBottom from "./elements/SocialShareBottom";
import SocialShareSide from "./elements/SocialShareSide";
import PostLayoutThree from "../layout/PostLayoutThree";

const PostFormatQuote = ({ postData, allData, postSizeLg, pClass }) => {

  return (
    <>
      <div className="post-single-wrapper p-t-xs-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">

            <PostLayoutThree data={postData} postSizeLg={true} key={postData.slug}/>

              <main className="site-main">
                <article className="post-details">
                  <div className="single-blog-wrapper">
                  <MetaDataFour metaData={postData} />


                    <div
                      dangerouslySetInnerHTML={{ __html: postData.content }}
                    ></div>
                  </div>
                </article>
                <hr className="m-t-xs-50 m-b-xs-60" />
               
              </main>
            </div>
            <div className="col-lg-4">
              <div className="post-sidebar">
                <WidgetPost dataPost={allData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatQuote;
