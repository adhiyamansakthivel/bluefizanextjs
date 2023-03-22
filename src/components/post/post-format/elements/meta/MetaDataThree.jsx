import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../../utils";

const MetaDataThree = ({ metaData }) => {

	
  return (
    <div className="banner banner__default bg-grey-light-three">
      <div className="container">
        <div className="row">
                    
          <div className="col-lg-8">
            <div className="post-title-wrapper">
              <div className="btn-group">
                    <a className={`cat-btn `}style={{backgroundColor: `${metaData.navColor}`}}></a>
              </div>
              <h1 className="m-b-xs-0 m-t-xs-10 axil-title hover-line">
                {metaData.navName} | {metaData.catName}
              </h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaDataThree;
