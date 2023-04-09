import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../utils";

const TeamOne = ({data}) => {

    const valuesArray = JSON.parse(data.images);

    return ( 
    <div className="axil-team-block m-b-xs-30">
            {
            valuesArray.slice(0, 1).map((img, i) => (
                <Link href={`/post/${data.slug}`} key={i}>
                    <a className="d-block img-container">
                        <Image
                            src={`${process.env.GET_IMAGES}${img.images}`}
                            alt={data.title}
                            width={350}
                            height={350}
                        />
                    </a>
                </Link>
            ))
                    
            }
        <div className="axil-team-inner-content text-center">
            <h3 className="axil-member-title hover-line">
                <Link href={`/post/${data.slug}`}>
                    <a>{data.title}</a>
                </Link>
            </h3>
           
        </div>
    </div>
     );
}
 
export default TeamOne;