import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutSix = ({data}) => {
	const valuesArray = JSON.parse(data.images);

  return (
	<div className="axil-img-container m-b-xs-15 m-b-sm-30">
		{
        valuesArray.slice(0, 1).map((img, i) => (
		<Link href={`/post/${data.slug}`} key={i}>
			<a className="d-block">
				<Image
					src={`${process.env.GET_IMAGES}${img.images}`}
					alt={data.title}
					width={390}
					height={390}
					
				/>
				<div className="grad-overlay grad-overlay__transparent" />
			</a>
		</Link>
		))
                
		}
		<div className="media post-block grad-overlay position-absolute">
			<div className="media-body justify-content-end">
				<div className="post-cat-group m-b-xs-10">
					<Link href={`/category/${data.category.catSlug}`}>
						<a className={`post-cat cat-btn btn-big`} style={{backgroundColor: `${data.category.navColor}`}}>{data.category.navName}</a>
					</Link>
					<Link href={`/category/${data.category.catSlug}`}>
						<a className={`post-cat cat-btn btn-big`} style={{backgroundColor: `${data.category.catColor}`}}>{data.category.catName}</a>
					</Link>
				</div>
				<div className="axil-media-bottom">
					<h3 className="axil-post-title hover-line m-b-xs-0">
						<Link href={`/post/${data.slug}`}>
							<a>{data.title}</a>
						</Link>
					</h3>
					
				</div>
			</div>
		</div>
		{/* End of .post-block */}
	</div>
  );
};

export default PostLayoutSix;
