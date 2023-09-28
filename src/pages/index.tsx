import Head from "next/head";
import { Chat } from "../packages/common/components/Chat";
import { ListChat } from "../packages/common/components/ListChat";
import { useState, useEffect } from "react";
import { groupService } from "../packages/group/services/groupService";
import { Group } from "../packages/group/models/group";

export default function Home() {
  const [groups, setGroups] = useState<[Group]>();
  useEffect(() => {
    (async () => {
      const { group } = await groupService.getGroups();
      setGroups(group);
    })();
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
        {/*begin::Content wrapper*/}
        <div className="d-flex flex-column flex-column-fluid">
          {/*begin::Toolbar*/}
          <div id="kt_app_toolbar" className="app-toolbar  py-3 py-lg-6 ">
            {/*begin::Toolbar container*/}
            <div
              id="kt_app_toolbar_container"
              className="app-container  container-xxl d-flex flex-stack "
            >
              {/*begin::Page title*/}
              <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                {/*begin::Title*/}
                <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                  Group Chat
                </h1>
                {/*end::Title*/}
                {/*begin::Breadcrumb*/}
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                  {/*begin::Item*/}
                  <li className="breadcrumb-item text-muted">
                    <a
                      href="/metronic8/demo1/../demo1/index.html"
                      className="text-muted text-hover-primary"
                    >
                      Home{" "}
                    </a>
                  </li>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <li className="breadcrumb-item">
                    <span className="bullet bg-gray-400 w-5px h-2px" />
                  </li>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <li className="breadcrumb-item text-muted">Chat </li>
                  {/*end::Item*/}
                </ul>
                {/*end::Breadcrumb*/}
              </div>
              {/*end::Page title*/}
              {/*begin::Actions*/}
              <div className="d-flex align-items-center gap-2 gap-lg-3">
                {/*begin::Filter menu*/}
                <div className="m-0">
                  {/*begin::Menu toggle*/}
                  <a
                    href="#"
                    className="btn btn-sm btn-flex btn-secondary fw-bold"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-filter fs-6 text-muted me-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                    Filter
                  </a>
                  {/*end::Menu toggle*/}
                  {/*begin::Menu 1*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                    data-kt-menu="true"
                    id="kt_menu_65144fbce9cc6"
                  >
                    {/*begin::Header*/}
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bold">
                        Filter Options
                      </div>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Menu separator*/}
                    <div className="separator border-gray-200" />
                    {/*end::Menu separator*/}
                    {/*begin::Form*/}
                    <div className="px-7 py-5">
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-semibold">
                          Status:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <div>
                          <select
                            className="form-select form-select-solid select2-hidden-accessible"
                            multiple
                            data-kt-select2="true"
                            data-close-on-select="false"
                            data-placeholder="Select option"
                            data-dropdown-parent="#kt_menu_65144fbce9cc6"
                            data-allow-clear="true"
                            data-select2-id="select2-data-7-5k4r"
                            tabIndex={-1}
                            aria-hidden="true"
                            data-kt-initialized={1}
                          >
                            <option />
                            <option value={1}>Approved</option>
                            <option value={2}>Pending</option>
                            <option value={2}>In Process</option>
                            <option value={2}>Rejected</option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap5"
                            dir="ltr"
                            data-select2-id="select2-data-8-g4rk"
                            style={{ width: "100%" }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--multiple form-select form-select-solid"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={-1}
                                aria-disabled="false"
                              >
                                <ul
                                  className="select2-selection__rendered"
                                  id="select2-dzf2-container"
                                />
                                <span className="select2-search select2-search--inline">
                                  <textarea
                                    className="select2-search__field"
                                    tabIndex={0}
                                    autoCorrect="off"
                                    autoCapitalize="none"
                                    spellCheck="false"
                                    role="searchbox"
                                    aria-autocomplete="list"
                                    autoComplete="off"
                                    aria-label="Search"
                                    aria-describedby="select2-dzf2-container"
                                    placeholder="Select option"
                                    style={{ width: "100%" }}
                                    defaultValue={""}
                                  />
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-semibold">
                          Member Type:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Options*/}
                        <div className="d-flex">
                          {/*begin::Options*/}
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                            />
                            <span className="form-check-label">Author</span>
                          </label>
                          {/*end::Options*/}
                          {/*begin::Options*/}
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={2}
                            />
                            <span className="form-check-label">Customer</span>
                          </label>
                          {/*end::Options*/}
                        </div>
                        {/*end::Options*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-semibold">
                          Notifications:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Switch*/}
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="notifications"
                            defaultChecked
                          />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        {/*end::Switch*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Actions*/}
                      <div className="d-flex justify-content-end">
                        <button
                          type="reset"
                          className="btn btn-sm btn-light btn-active-light-primary me-2"
                          data-kt-menu-dismiss="true"
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                          data-kt-menu-dismiss="true"
                        >
                          Apply
                        </button>
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Form*/}
                  </div>
                  {/*end::Menu 1*/}{" "}
                </div>
                {/*end::Filter menu*/}
                {/*begin::Secondary button*/}
                {/*end::Secondary button*/}
                {/*begin::Primary button*/}
                <a
                  href="#"
                  className="btn btn-sm fw-bold btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_app"
                >
                  Create{" "}
                </a>
                {/*end::Primary button*/}
              </div>
              {/*end::Actions*/}
            </div>
            {/*end::Toolbar container*/}
          </div>
          {/*end::Toolbar*/}
          {/*begin::Content*/}
          <div id="kt_app_content" className="app-content  flex-column-fluid ">
            {/*begin::Content container*/}
            <div
              id="kt_app_content_container"
              className="app-container  container-xxl "
            >
              {/*begin::Layout*/}
              <div className="d-flex flex-column flex-lg-row">
                {/*begin::Sidebar*/}
                <div className="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
                  {/*begin::Contacts*/}
                  <ListChat chat={groups} />
                  {/*end::Contacts*/}{" "}
                </div>
                {/*end::Sidebar*/}
                {/*begin::Content*/}
                <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10">
                  {/*begin::Messenger*/}
                  <Chat />
                  {/*end::Messenger*/}{" "}
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Layout*/}
              {/*begin::Modals*/}
              {/*begin::Modal - View Users*/}
              <div
                className="modal fade"
                id="kt_modal_view_users"
                tabIndex={-1}
                aria-hidden="true"
              >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog mw-650px">
                  {/*begin::Modal content*/}
                  <div className="modal-content">
                    {/*begin::Modal header*/}
                    <div className="modal-header pb-0 border-0 justify-content-end">
                      {/*begin::Close*/}
                      <div
                        className="btn btn-sm btn-icon btn-active-color-primary"
                        data-bs-dismiss="modal"
                      >
                        <i className="ki-duotone ki-cross fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>{" "}
                      </div>
                      {/*end::Close*/}
                    </div>
                    {/*begin::Modal header*/}
                    {/*begin::Modal body*/}
                    <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                      {/*begin::Heading*/}
                      <div className="text-center mb-13">
                        {/*begin::Title*/}
                        <h1 className="mb-3">Browse Users</h1>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-muted fw-semibold fs-5">
                          If you need more info, please check out our
                          <a href="#" className="link-primary fw-bold">
                            Users Directory
                          </a>
                          .
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Users*/}
                      <div className="mb-15">
                        {/*begin::List*/}
                        <div className="mh-375px scroll-y me-n7 pe-7">
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="/metronic8/demo1/assets/media/avatars/300-6.jpg"
                                />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Emma Smith
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Art Director{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  smith@kpmg.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $23,000
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                  M{" "}
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Melody Macy
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Marketing Analytic{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  melody@altbox.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $50,500
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="/metronic8/demo1/assets/media/avatars/300-1.jpg"
                                />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Max Smith
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Software Enginer{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  max@kt.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $75,900
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="/metronic8/demo1/assets/media/avatars/300-5.jpg"
                                />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Sean Bean
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Web Developer{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  sean@dellito.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $10,500
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="/metronic8/demo1/assets/media/avatars/300-25.jpg"
                                />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Brian Cox
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    UI/UX Designer{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  brian@exchange.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $20,000
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                  C{" "}
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Mikaela Collins
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Head Of Marketing{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  mik@pex.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $9,300
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="/metronic8/demo1/assets/media/avatars/300-9.jpg"
                                />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Francis Mitcham
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Software Arcitect{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  f.mit@kpmg.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $15,000
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                  O{" "}
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Olivia Wild
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    System Admin{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  olivia@corpmail.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $23,000
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                  N{" "}
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Neil Owen
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Account Manager{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  owen.neil@gmail.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $45,800
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="/metronic8/demo1/assets/media/avatars/300-23.jpg"
                                />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Dan Wilson
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Web Desinger{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  dam@consilting.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $90,500
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                  E{" "}
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Emma Bold
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Corporate Finance{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  emma@intenso.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $5,000
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="/metronic8/demo1/assets/media/avatars/300-12.jpg"
                                />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Ana Crown
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Customer Relationship{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  ana.cf@limtel.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $70,000
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <div className="d-flex flex-stack py-5 ">
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-info text-info fw-semibold">
                                  A{" "}
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                                >
                                  Robert Doe
                                  <span className="badge badge-light fs-8 fw-semibold ms-2">
                                    Marketing Executive{" "}
                                  </span>
                                </a>
                                {/*end::Name*/}
                                {/*begin::Email*/}
                                <div className="fw-semibold text-muted">
                                  robert@benko.com
                                </div>
                                {/*end::Email*/}
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Stats*/}
                            <div className="d-flex">
                              {/*begin::Sales*/}
                              <div className="text-end">
                                <div className="fs-5 fw-bold text-dark">
                                  $45,500
                                </div>
                                <div className="fs-7 text-muted">Sales</div>
                              </div>
                              {/*end::Sales*/}
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::List*/}
                      </div>
                      {/*end::Users*/}
                      {/*begin::Notice*/}
                      <div className="d-flex justify-content-between">
                        {/*begin::Label*/}
                        <div className="fw-semibold">
                          <label className="fs-6">
                            Adding Users by Team Members
                          </label>
                          <div className="fs-7 text-muted">
                            If you need more info, please check budget planning
                          </div>
                        </div>
                        {/*end::Label*/}
                        {/*begin::Switch*/}
                        <label className="form-check form-switch form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" />
                          <span className="form-check-label fw-semibold text-muted">
                            Allowed
                          </span>
                        </label>
                        {/*end::Switch*/}
                      </div>
                      {/*end::Notice*/}
                    </div>
                    {/*end::Modal body*/}
                  </div>
                  {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
              </div>
              {/*end::Modal - View Users*/}
              {/*begin::Modal - Users Search*/}
              <div
                className="modal fade"
                id="kt_modal_users_search"
                tabIndex={-1}
                aria-hidden="true"
              >
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                  {/*begin::Modal content*/}
                  <div className="modal-content">
                    {/*begin::Modal header*/}
                    <div className="modal-header pb-0 border-0 justify-content-end">
                      {/*begin::Close*/}
                      <div
                        className="btn btn-sm btn-icon btn-active-color-primary"
                        data-bs-dismiss="modal"
                      >
                        <i className="ki-duotone ki-cross fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>{" "}
                      </div>
                      {/*end::Close*/}
                    </div>
                    {/*begin::Modal header*/}
                    {/*begin::Modal body*/}
                    <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                      {/*begin::Content*/}
                      <div className="text-center mb-13">
                        <h1 className="mb-3">Search Users</h1>
                        <div className="text-muted fw-semibold fs-5">
                          Invite Collaborators To Your Project
                        </div>
                      </div>
                      {/*end::Content*/}
                      {/*begin::Search*/}
                      <div
                        id="kt_modal_users_search_handler"
                        data-kt-search-keypress="true"
                        data-kt-search-min-length={2}
                        data-kt-search-enter="enter"
                        data-kt-search-layout="inline"
                        data-kt-search="true"
                      >
                        {/*begin::Form*/}
                        <form
                          data-kt-search-element="form"
                          className="w-100 position-relative mb-5"
                          autoComplete="off"
                        >
                          {/*begin::Hidden input(Added to disable form autocomplete)*/}
                          <input type="hidden" />
                          {/*end::Hidden input*/}
                          {/*begin::Icon*/}
                          <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                            <span className="path1" />
                            <span className="path2" />
                          </i>{" "}
                          {/*end::Icon*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-solid px-15"
                            name="search"
                            placeholder="Search by username, full name or email..."
                            data-kt-search-element="input"
                          />
                          {/*end::Input*/}
                          {/*begin::Spinner*/}
                          <span
                            className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                            data-kt-search-element="spinner"
                          >
                            <span className="spinner-border h-15px w-15px align-middle text-muted" />
                          </span>
                          {/*end::Spinner*/}
                          {/*begin::Reset*/}
                          <span
                            className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                            data-kt-search-element="clear"
                          >
                            <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                              <span className="path1" />
                              <span className="path2" />
                            </i>{" "}
                          </span>
                          {/*end::Reset*/}
                        </form>
                        {/*end::Form*/}
                        {/*begin::Wrapper*/}
                        <div className="py-5">
                          {/*begin::Suggestions*/}
                          <div data-kt-search-element="suggestions">
                            {/*begin::Heading*/}
                            <h3 className="fw-semibold mb-5">
                              Recently searched:
                            </h3>
                            {/*end::Heading*/}
                            {/*begin::Users*/}
                            <div className="mh-375px scroll-y me-n7 pe-7">
                              {/*begin::User*/}
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                              >
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle me-5">
                                  <img
                                    alt="Pic"
                                    src="/metronic8/demo1/assets/media/avatars/300-6.jpg"
                                  />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Info*/}
                                <div className="fw-semibold">
                                  <span className="fs-6 text-gray-800 me-2">
                                    Emma Smith
                                  </span>
                                  <span className="badge badge-light">
                                    Art Director
                                  </span>
                                </div>
                                {/*end::Info*/}
                              </a>
                              {/*end::User*/}
                              {/*begin::User*/}
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                              >
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle me-5">
                                  <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                    M{" "}
                                  </span>
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Info*/}
                                <div className="fw-semibold">
                                  <span className="fs-6 text-gray-800 me-2">
                                    Melody Macy
                                  </span>
                                  <span className="badge badge-light">
                                    Marketing Analytic
                                  </span>
                                </div>
                                {/*end::Info*/}
                              </a>
                              {/*end::User*/}
                              {/*begin::User*/}
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                              >
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle me-5">
                                  <img
                                    alt="Pic"
                                    src="/metronic8/demo1/assets/media/avatars/300-1.jpg"
                                  />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Info*/}
                                <div className="fw-semibold">
                                  <span className="fs-6 text-gray-800 me-2">
                                    Max Smith
                                  </span>
                                  <span className="badge badge-light">
                                    Software Enginer
                                  </span>
                                </div>
                                {/*end::Info*/}
                              </a>
                              {/*end::User*/}
                              {/*begin::User*/}
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                              >
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle me-5">
                                  <img
                                    alt="Pic"
                                    src="/metronic8/demo1/assets/media/avatars/300-5.jpg"
                                  />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Info*/}
                                <div className="fw-semibold">
                                  <span className="fs-6 text-gray-800 me-2">
                                    Sean Bean
                                  </span>
                                  <span className="badge badge-light">
                                    Web Developer
                                  </span>
                                </div>
                                {/*end::Info*/}
                              </a>
                              {/*end::User*/}
                              {/*begin::User*/}
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                              >
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px symbol-circle me-5">
                                  <img
                                    alt="Pic"
                                    src="/metronic8/demo1/assets/media/avatars/300-25.jpg"
                                  />
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Info*/}
                                <div className="fw-semibold">
                                  <span className="fs-6 text-gray-800 me-2">
                                    Brian Cox
                                  </span>
                                  <span className="badge badge-light">
                                    UI/UX Designer
                                  </span>
                                </div>
                                {/*end::Info*/}
                              </a>
                              {/*end::User*/}
                            </div>
                            {/*end::Users*/}
                          </div>
                          {/*end::Suggestions*/}
                          {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                          <div
                            data-kt-search-element="results"
                            className="d-none"
                          >
                            {/*begin::Users*/}
                            <div className="mh-375px scroll-y me-n7 pe-7">
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={0}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='0']"
                                      defaultValue={0}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-6.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Emma Smith
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      smith@kpmg.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-9-v6pq"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option
                                      value={2}
                                      data-select2-id="select2-data-11-rg40"
                                    >
                                      Owner
                                    </option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-10-ntgv"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-295l-container"
                                        aria-controls="select2-295l-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-295l-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Owner"
                                        >
                                          Owner
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={1}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='1']"
                                      defaultValue={1}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                      M{" "}
                                    </span>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Melody Macy
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      melody@altbox.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-12-srcf"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option
                                      value={1}
                                      data-select2-id="select2-data-14-sbda"
                                    >
                                      Guest
                                    </option>
                                    <option value={2}>Owner</option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-13-ykpi"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-jbc3-container"
                                        aria-controls="select2-jbc3-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-jbc3-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Guest"
                                        >
                                          Guest
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={2}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='2']"
                                      defaultValue={2}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-1.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Max Smith
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      max@kt.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-15-7uw6"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option value={2}>Owner</option>
                                    <option
                                      value={3}
                                      data-select2-id="select2-data-17-ujtm"
                                    >
                                      Can Edit
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-16-5f3b"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-lh4w-container"
                                        aria-controls="select2-lh4w-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-lh4w-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Can Edit"
                                        >
                                          Can Edit
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={3}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='3']"
                                      defaultValue={3}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-5.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Sean Bean
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      sean@dellito.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-18-evm3"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option
                                      value={2}
                                      data-select2-id="select2-data-20-qmck"
                                    >
                                      Owner
                                    </option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-19-t5xs"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-znef-container"
                                        aria-controls="select2-znef-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-znef-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Owner"
                                        >
                                          Owner
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={4}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='4']"
                                      defaultValue={4}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-25.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Brian Cox
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      brian@exchange.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-21-odvl"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option value={2}>Owner</option>
                                    <option
                                      value={3}
                                      data-select2-id="select2-data-23-b1ug"
                                    >
                                      Can Edit
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-22-o4i5"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-dwtn-container"
                                        aria-controls="select2-dwtn-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-dwtn-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Can Edit"
                                        >
                                          Can Edit
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={5}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='5']"
                                      defaultValue={5}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                      C{" "}
                                    </span>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Mikaela Collins
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      mik@pex.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-24-0jbe"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option
                                      value={2}
                                      data-select2-id="select2-data-26-9zyi"
                                    >
                                      Owner
                                    </option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-25-rr6x"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-kywt-container"
                                        aria-controls="select2-kywt-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-kywt-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Owner"
                                        >
                                          Owner
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={6}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='6']"
                                      defaultValue={6}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-9.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Francis Mitcham
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      f.mit@kpmg.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-27-pa2n"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option value={2}>Owner</option>
                                    <option
                                      value={3}
                                      data-select2-id="select2-data-29-luzk"
                                    >
                                      Can Edit
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-28-2kld"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-q66q-container"
                                        aria-controls="select2-q66q-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-q66q-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Can Edit"
                                        >
                                          Can Edit
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={7}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='7']"
                                      defaultValue={7}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                      O{" "}
                                    </span>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Olivia Wild
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      olivia@corpmail.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-30-z9ic"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option
                                      value={2}
                                      data-select2-id="select2-data-32-4vya"
                                    >
                                      Owner
                                    </option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-31-rlz3"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-p3cd-container"
                                        aria-controls="select2-p3cd-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-p3cd-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Owner"
                                        >
                                          Owner
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={8}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='8']"
                                      defaultValue={8}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                      N{" "}
                                    </span>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Neil Owen
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      owen.neil@gmail.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-33-xclu"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option
                                      value={1}
                                      data-select2-id="select2-data-35-10ur"
                                    >
                                      Guest
                                    </option>
                                    <option value={2}>Owner</option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-34-vt3p"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-ji3e-container"
                                        aria-controls="select2-ji3e-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-ji3e-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Guest"
                                        >
                                          Guest
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={9}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='9']"
                                      defaultValue={9}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-23.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Dan Wilson
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      dam@consilting.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-36-7iki"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option value={2}>Owner</option>
                                    <option
                                      value={3}
                                      data-select2-id="select2-data-38-psr6"
                                    >
                                      Can Edit
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-37-a19g"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-glwi-container"
                                        aria-controls="select2-glwi-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-glwi-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Can Edit"
                                        >
                                          Can Edit
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={10}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='10']"
                                      defaultValue={10}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                      E{" "}
                                    </span>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Emma Bold
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      emma@intenso.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-39-g64o"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option
                                      value={2}
                                      data-select2-id="select2-data-41-f8jm"
                                    >
                                      Owner
                                    </option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-40-z4vv"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-xf3z-container"
                                        aria-controls="select2-xf3z-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-xf3z-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Owner"
                                        >
                                          Owner
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={11}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='11']"
                                      defaultValue={11}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-12.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Ana Crown
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      ana.cf@limtel.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-42-gkkp"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option
                                      value={1}
                                      data-select2-id="select2-data-44-9yxl"
                                    >
                                      Guest
                                    </option>
                                    <option value={2}>Owner</option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-43-banz"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-co5q-container"
                                        aria-controls="select2-co5q-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-co5q-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Guest"
                                        >
                                          Guest
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={12}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='12']"
                                      defaultValue={12}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <span className="symbol-label bg-light-info text-info fw-semibold">
                                      A{" "}
                                    </span>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Robert Doe
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      robert@benko.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-45-5qfu"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option value={2}>Owner</option>
                                    <option
                                      value={3}
                                      data-select2-id="select2-data-47-v8th"
                                    >
                                      Can Edit
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-46-f47e"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-znjl-container"
                                        aria-controls="select2-znjl-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-znjl-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Can Edit"
                                        >
                                          Can Edit
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={13}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='13']"
                                      defaultValue={13}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-13.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      John Miller
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      miller@mapple.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-48-pqmu"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option value={2}>Owner</option>
                                    <option
                                      value={3}
                                      data-select2-id="select2-data-50-cvoo"
                                    >
                                      Can Edit
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-49-qz1d"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-pafq-container"
                                        aria-controls="select2-pafq-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-pafq-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Can Edit"
                                        >
                                          Can Edit
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={14}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='14']"
                                      defaultValue={14}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <span className="symbol-label bg-light-success text-success fw-semibold">
                                      L{" "}
                                    </span>
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Lucy Kunic
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      lucy.m@fentech.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-51-ipi0"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option
                                      value={2}
                                      data-select2-id="select2-data-53-qf1d"
                                    >
                                      Owner
                                    </option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-52-xfam"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-phfe-container"
                                        aria-controls="select2-phfe-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-phfe-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Owner"
                                        >
                                          Owner
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={15}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='15']"
                                      defaultValue={15}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-21.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Ethan Wilder
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      ethan@loop.com.au
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-54-lwkj"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option
                                      value={1}
                                      data-select2-id="select2-data-56-apyi"
                                    >
                                      Guest
                                    </option>
                                    <option value={2}>Owner</option>
                                    <option value={3}>Can Edit</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-55-x523"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-w6wt-container"
                                        aria-controls="select2-w6wt-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-w6wt-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Guest"
                                        >
                                          Guest
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                              {/*begin::Separator*/}
                              <div className="border-bottom border-gray-300 border-bottom-dashed" />
                              {/*end::Separator*/}
                              {/*begin::User*/}
                              <div
                                className="rounded d-flex flex-stack bg-active-lighten p-4"
                                data-user-id={16}
                              >
                                {/*begin::Details*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-custom form-check-solid me-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="users"
                                      data-kt-check="true"
                                      data-kt-check-target="[data-user-id='16']"
                                      defaultValue={16}
                                    />
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px symbol-circle">
                                    <img
                                      alt="Pic"
                                      src="/metronic8/demo1/assets/media/avatars/300-23.jpg"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-5">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Dan Wilson
                                    </a>
                                    <div className="fw-semibold text-muted">
                                      dam@consilting.com
                                    </div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*end::Details*/}
                                {/*begin::Access menu*/}
                                <div className="ms-2 w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-select2-id="select2-data-57-cez3"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    data-kt-initialized={1}
                                  >
                                    <option value={1}>Guest</option>
                                    <option value={2}>Owner</option>
                                    <option
                                      value={3}
                                      data-select2-id="select2-data-59-tmss"
                                    >
                                      Can Edit
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--bootstrap5"
                                    dir="ltr"
                                    data-select2-id="select2-data-58-32mg"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="selection">
                                      <span
                                        className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-txo0-container"
                                        aria-controls="select2-txo0-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-txo0-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Can Edit"
                                        >
                                          Can Edit
                                        </span>
                                        <span
                                          className="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation" />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                {/*end::Access menu*/}
                              </div>
                              {/*end::User*/}
                            </div>
                            {/*end::Users*/}
                            {/*begin::Actions*/}
                            <div className="d-flex flex-center mt-15">
                              <button
                                type="reset"
                                id="kt_modal_users_search_reset"
                                data-bs-dismiss="modal"
                                className="btn btn-active-light me-3"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                id="kt_modal_users_search_submit"
                                className="btn btn-primary"
                              >
                                Add Selected Users
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Results*/}
                          {/*begin::Empty*/}
                          <div
                            data-kt-search-element="empty"
                            className="text-center d-none"
                          >
                            {/*begin::Message*/}
                            <div className="fw-semibold py-10">
                              <div className="text-gray-600 fs-3 mb-2">
                                No users found
                              </div>
                              <div className="text-muted fs-6">
                                Try to search by username, full name or email...
                              </div>
                            </div>
                            {/*end::Message*/}
                            {/*begin::Illustration*/}
                            <div className="text-center px-5">
                              <img
                                src="/metronic8/demo1/assets/media/illustrations/sketchy-1/1.png"
                                alt=""
                                className="w-100 h-200px h-sm-325px"
                              />
                            </div>
                            {/*end::Illustration*/}
                          </div>
                          {/*end::Empty*/}{" "}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Search*/}
                    </div>
                    {/*end::Modal body*/}
                  </div>
                  {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
              </div>
              {/*end::Modal - Users Search*/}
              {/*end::Modals*/}{" "}
            </div>
            {/*end::Content container*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Content wrapper*/}
        {/*begin::Footer*/}
        <div id="kt_app_footer" className="app-footer ">
          {/*begin::Footer container*/}
          <div className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
            {/*begin::Copyright*/}
            <div className="text-dark order-2 order-md-1">
              <span className="text-muted fw-semibold me-1">2023©</span>
              <a
                href="https://keenthemes.com"
                target="_blank"
                className="text-gray-800 text-hover-primary"
              >
                Keenthemes
              </a>
            </div>
            {/*end::Copyright*/}
            {/*begin::Menu*/}
            <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
              <li className="menu-item">
                <a
                  href="https://keenthemes.com"
                  target="_blank"
                  className="menu-link px-2"
                >
                  About
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://devs.keenthemes.com"
                  target="_blank"
                  className="menu-link px-2"
                >
                  Support
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://1.envato.market/EA4JP"
                  target="_blank"
                  className="menu-link px-2"
                >
                  Purchase
                </a>
              </li>
            </ul>
            {/*end::Menu*/}{" "}
          </div>
          {/*end::Footer container*/}
        </div>
        {/*end::Footer*/}{" "}
      </div>
    </div>
  );
}
