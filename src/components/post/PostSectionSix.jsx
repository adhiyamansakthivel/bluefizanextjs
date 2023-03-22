import { slugify } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import PostLayoutFour from "./layout/PostLayoutFour";

const PostSectionSix = ({postData, postCate}) => {

    // const foodPost = postData.filter(post => slugify(post.cate) === 'food' || slugify(post.cate) === 'drink');

    return ( 
        <div className="related-post p-b-xs-30">
            <div className="container">
                <SectionTitle title={postCate.cateName} btnText={postCate.cateName}/>
                <div className="grid-wrapper">
                    <div className="row">
                        {postData.slice(0, 4).map((data) => (
                            <div className="col-lg-3 col-md-4" key={data.slug}>
                                <PostLayoutFour data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default PostSectionSix;