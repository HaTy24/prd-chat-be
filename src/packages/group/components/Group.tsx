import { FC } from "react";

export const Group: FC = () => {
  return (
    <div className="card">
      <div className="card-body d-flex flex-center flex-column p-9">
        <div className="mb-5">
          <div className="symbol  symbol-75px symbol-circle ">
            <span className="symbol-label  bg-light-danger text-danger fs-5 fw-bolder ">
              M
            </span>
            <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3" />
          </div>{" "}
        </div>
        <a
          href="#"
          className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
        >
          Melody Macy
        </a>
        <div className="fw-semibold text-gray-400 mb-6">Marketing Analytic</div>
        <div className="d-flex flex-center flex-wrap mb-5">
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
            <div className="fs-6 fw-bold text-gray-700">$14,560</div>
            <div className="fw-semibold text-gray-400">Avg. Earnings</div>
          </div>
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
            <div className="fs-6 fw-bold text-gray-700">$236,400</div>
            <div className="fw-semibold text-gray-400">Total Sales</div>
          </div>
        </div>
        <button
          className="btn btn-sm btn-light-primary fw-bold"
          data-kt-drawer-show="true"
          data-kt-drawer-target="#kt_drawer_chat"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};
