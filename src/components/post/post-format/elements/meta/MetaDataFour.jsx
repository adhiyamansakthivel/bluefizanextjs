import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../../utils";
import dateFormat from 'dateformat';
const MetaDataFour = ({ metaData }) => {

  return (
    <>
      
      <div className="post-title-wrapper m-b-xs-30">
            <div className="post-cat-group m-b-xs-10">
              <Link href={`/category/${metaData.category.catSlug}`}>
                <a className={`post-cat cat-btn btn-big`} style={{backgroundColor: `${metaData.category.navColor}`}}>{metaData.category.navName}</a>
              </Link>
              <Link href={`/category/${metaData.category.catSlug}`}>
                  <a className={`post-cat`} style={{color:`${metaData.category.catColor}`}}>{metaData.category.catName}</a>
              </Link>
            </div>			
        <h1 className="m-b-xs-0 axil-post-title hover-line">{metaData.title}</h1>
        <div className="post-metas banner-post-metas m-t-xs-20">
          <ul className="list-inline">
           
            <li>
              <i className="dot">.</i>{dateFormat(metaData.date, "mmmm dS, yyyy")}
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default MetaDataFour;
