import { FC } from "react";
import { Group } from "../../group/models/group";
import Link from "next/link";

interface Props {
  chat: Group[];
}

export const ListChat: FC<Props> = ({ chat }) => {
  return (
    <div className="card card-flush">
      <div className="card-header pt-7" id="kt_chat_contacts_header">
        <form className="w-100 position-relative" autoComplete="off">
          <i className="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
            <span className="path1" />
            <span className="path2" />
          </i>
          <input
            type="text"
            className="form-control form-control-solid px-13"
            name="search"
            placeholder="Search by username or email..."
          />
        </form>
      </div>
      <div className="card-body pt-5" id="kt_chat_contacts_body">
        <div
          className="scroll-y me-n5 pe-5 h-200px h-lg-auto"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_toolbar, #kt_app_toolbar, #kt_footer, #kt_app_footer, #kt_chat_contacts_header"
          data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_contacts_body"
          data-kt-scroll-offset="5px"
          style={{ maxHeight: "301px" }}
        >
          {chat?.map((item, index) => (
            <Link
              key={index}
              href={{
                query: {
                  id: item.id,
                  groupName: item.groupName,
                },
              }}
            >
              <div className="d-flex flex-stack py-4">
                <div className="d-flex align-items-center">
                  <div className="symbol  symbol-45px symbol-circle ">
                    <span
                      className={`symbol-label ${
                        index % 2 !== 0 ? "bg-light-danger" : "bg-light-warning"
                      } text-danger fs-6 fw-bolder text-uppercase`}
                    >
                      {item.groupName.charAt(0)}
                    </span>
                  </div>
                  <div className="ms-5">
                    <div className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">
                      {item.groupName}
                    </div>
                    <div className="fw-semibold text-muted">
                      melody@altbox.com
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end ms-2">
                  <span className="text-muted fs-7 mb-1">1 day</span>
                </div>
              </div>
              <div className="separator separator-dashed d-none" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
