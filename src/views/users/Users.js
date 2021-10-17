import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CPagination,
} from "@coreui/react";

import usersData from "./UsersData";

const itemsPerPage = 15;

const getBadge = (status) => {
  switch (status) {
    case "Admin":
      return "success";
    case "Normal":
      return "secondary";
    case "VVIP":
      return "warning";
    default:
      return "secondary";
  }
};

const Users = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const handleStatusChange = (userId, memberType) => {
    const target = document
      .getElementById(userId)
      .getElementsByTagName("button")[0];

    target.classList.remove("btn-" + getBadge(target.innerText));
    target.innerText = memberType;
    target.classList.add("btn-" + getBadge(memberType));
  };

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  const changeAuth = (userId, memberType) => {
    console.log(userId, memberType);
    handleStatusChange(userId, memberType);
    // update userdata
    // fetch("http://localhost:8000/user/update", {
    //   method: "POST", // or 'PUT'
    //   body: { userId: userId, memberType: memberType },
    // }).then((response) => {
    //   // setState()
    //   // reload
    // });
  };
  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            Users
            <small className="text-muted"> example</small>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={[
                "name",
                "user_id",
                "memberType",
                "email",
                "phone",
                "registered",
                "is_verified",
              ]}
              hover
              itemsPerPage={itemsPerPage}
              activePage={page}
              clickableRows
              scopedSlots={{
                memberType: (item) => (
                  <td id={item.name}>
                    <CDropdown className="m-1 btn-group">
                      <CDropdownToggle color={getBadge(item.status)}>
                        {item.status}
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem
                          onClick={(e) => {
                            changeAuth(item.name, e.target.innerText);
                          }}
                        >
                          Normal
                        </CDropdownItem>
                        <CDropdownItem
                          onClick={(e) => {
                            changeAuth(item.name, e.target.innerText);
                          }}
                        >
                          Admin
                        </CDropdownItem>
                        <CDropdownItem
                          onClick={(e) => {
                            changeAuth(item.name, e.target.innerText);
                          }}
                        >
                          VVIP
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </td>
                ),
                name: (item) => (
                  <td onClick={() => history.push(`/users/${item.id}`)}>
                    {item.name}
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={Math.floor(usersData.length / itemsPerPage) + 1}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Users;
