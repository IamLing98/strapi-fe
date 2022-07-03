import baseApiUrl from "@/utils/constants";
import { useSelector } from "react-redux";

export default function AdminInformation() {
  const adminInfo = useSelector((store) => store?.indexReducer?.adminInfo);

  return (
    <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
      <img className="about-author-img mb-25" src={`${baseApiUrl}${adminInfo?.avata?.url}`} alt />
      <h5 className="mb-20">{adminInfo?.helloText}</h5>
      <p className="font-medium text-muted">{adminInfo?.informationText}</p>
      <strong>Tìm kiếm tôi: </strong>
      <ul className="header-social-network d-inline-block list-inline color-white mb-20">
        <li className="list-inline-item">
          <a className="fb" href={adminInfo?.facebookUrl} target="_blank" title="Facebook">
            <i className="elegant-icon social_facebook" />
          </a>
        </li>
        <li className="list-inline-item">
          <a className="tw" href="#" target="_blank" title="Tweet now">
            <i className="elegant-icon social_twitter" />
          </a>
        </li>
        <li className="list-inline-item">
          <a className="pt" href="#" target="_blank" title="Pin it">
            <i className="elegant-icon social_pinterest" />
          </a>
        </li>
      </ul>
    </div>
  );
}
