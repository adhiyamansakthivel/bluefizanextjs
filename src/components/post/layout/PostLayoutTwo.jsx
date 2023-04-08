import Image from "next/image";
import Link from "next/link";
import dateFormat from 'dateformat';

const PostLayoutTwo = ({data, postSizeMd, postBgDark}) => {
  const obj = {};
  const valuesArray = JSON.parse(data.images);

  return (
      	<div className={`media post-block m-b-xs-30 ${postSizeMd === true ? "post-block__mid" : ""} ${postBgDark === true ? "post-block__on-dark-bg": "" }`}>
                {
                valuesArray.slice(0, 1).map((img, i) => (
                <Link href={`/post/${data.slug}`} key={i}>
                  <a className="align-self-center">
                  <Image
                    src={`http://3.108.76.77/blogImages/${img.images}`}
                    alt={data.title}
                    width={postSizeMd === true ? 285 : 150}
                    height={postSizeMd === true ? 285 : 150}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"//
                  />
                  </a>
                </Link>
                ))
                
              }
                
         <div className="media-body">
           <div className="post-cat-group m-b-xs-10">
              <Link href={`/category/${data.category.catSlug}`}>
                <a className={`post-cat cat-btn btn-big`} style={{backgroundColor: `${data.category.navColor}`}}>{data.category.navName}</a>
              </Link>
              <Link href={`/category/${data.category.catSlug}`}>
                <a className={`post-cat cat-btn btn-big`} style={{color: `${data.category.catColor}`}}>{data.category.catName}</a>
              </Link>
           </div>
           <h3 className="axil-post-title hover-line hover-line">
                <Link href={`/post/${data.slug}`}>
                    <a>{data.title}</a>
                </Link>
           </h3>
		   {postSizeMd === true ? 
			<p className="mid" dangerouslySetInnerHTML={{ __html: data.content }}>                      
      </p>

			: ""
			}
          <div className="post-metas">
             <ul className="list-inline">
              <li>
                {dateFormat(data.posted, "mmmm dS, yyyy")}
              </li>
             </ul>
           </div>
         </div>
		</div>
  );
};

export default PostLayoutTwo;
