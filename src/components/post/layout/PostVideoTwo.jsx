import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostVideoTwo = ({ data, pClass, videoIcon }) => {

  const valuesArray = JSON.parse(data.images);

  return (
    <div className={`media post-block post-block__small ${pClass ?? "post-block__on-dark-bg m-b-xs-30"}`}>
      		 {
            valuesArray.slice(0, 1).map((img, i) => (
            <Link href={`/post/${data.slug}`} key={i}>
              <a className="align-self-center">
                  <Image
                  src={`${process.env.GET_IMAGES}${img.images}`}
                  alt={data.title}
                  width={100}
                  height={100}
                  />
              </a>
            </Link>
             ))
                
		      }
      <div className="media-body">
        <div className="post-cat-group">
              <Link href={`/category/${data.category.catSlug}`}>
                <a className={`post-cat cat-btn btn-big`} style={{backgroundColor: `${data.category.navColor}`}}>{data.category.navName}</a>
              </Link>
              <Link href={`/category/${data.category.catSlug}`}>
                  <a className={`post-cat`} style={{color:`${data.category.catColor}`}}>{data.category.catName}</a>
              </Link>
        </div>
        <h3 className="axil-post-title hover-line hover-line">
          <Link href={`/post/${data.slug}`}>
				    <a>{data.title}</a>
			    </Link>
        </h3>
        
      </div>
    </div>
  );
};

export default PostVideoTwo;
