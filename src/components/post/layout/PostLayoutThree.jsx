import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutThree = ({ data, postSizeLg, pClass, videoPost }) => {
	
  const valuesArray = JSON.parse(data.images);

  return (
	<div className={`axil-img-container ${pClass ?? "m-b-xs-30"}`}>
		 {
            valuesArray.slice(0, 1).map((img, i) => (
			<Link href={`/post/${data.slug}`} key={i}>
				<a >
					<Image
						src={`http://3.108.76.77/blogImages/${img.images}`}
						alt={data.title}
						width={postSizeLg === true? 730 : 350}
						height={postSizeLg === true? 550 : 260}
						className="w-100"
						objectFit="contain"
					/>
				</a>
			</Link>
		))
                
		}
		<div className="media post-block position-absolute">
		<div className={`media-body ${postSizeLg === true ? "media-body__big" : "" }`}>
	

		</div>
		</div>
		{/* End of .post-block */}
	</div>
  );
};

export default PostLayoutThree;
