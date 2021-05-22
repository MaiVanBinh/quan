import React, { useEffect, useState } from "react";
import { Table, Button, FormControl, Form } from "react-bootstrap";
import Axios from "axios";
import { API_ROOT } from "../../utilities/constants";
import Pagination from "./../../components/Panigation/Pagination";
import { IconPlus, IconRefresh, IconSearch } from "../../utilities/SVG";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [listDelete, setListDelete] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    Axios.get(API_ROOT + "/projects")
      .then((res) => {
        if (res.data && res.data.content) {
          setProjects(res.data.content);
          setPage({ current: res.data.page + 1, total: 5, next: 3, prev: 1 });
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // check button la `checked` = true => chon, checked=false => bo chon
  const onCheckDeleteHandler = (e, value) => {
    let updateList = [...listDelete];
    if (e.target.checked) {
      updateList.push(value);
    } else {
      const index = listDelete.findIndex((e) => e === value);
      updateList.splice(index, 1);
    }
    setListDelete(updateList);
  };
  const onDelete = (project) => {};
  return (
    <div className="container-fluid pt-3 pb-5">
      <div className="wrap-action mb-3 d-flex justify-content-between">
        <div>
          <Button
            onClick={() => {
              // setFilterList({
              //   page: 1,
              //   limit: 10,
              // });
              // setSearchKeyword("");
              // getFamiliesList();
            }}
          >
            <IconRefresh width={15} height={15} color={"#fff"} />
          </Button>
        </div>
        <Form inline className="searchCp">
          {/* <Form.Control
            className="mr-sm-2"
            value={filterList.order}
            as="select"
            onChange={(e) =>
              setFilterList({ ...filterList, order: e.target.value, page: 1 })
            }
          > */}
          {/* <option value={null}>Tất cả bộ</option>
            {orders
              ? orders.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name_vn}
                  </option>
                ))
              : null} */}
          {/* </Form.Control> */}
          <FormControl
            type="text"
            placeholder=""
            className="mr-sm-2"
            // onChange={(e) => setSearchKeyword(e.target.value)}
            // value={searchKeyword}
          />
          <Button
          // onClick={() =>
          //   setFilterList({ ...filterList, name: searchKeyword, page: 1 })
          // }
          >
            <IconSearch width={15} height={15} color={"#fff"} />
          </Button>
        </Form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Khách hàng</th>
            <th>Ngày bắt đầu</th>
            <th>Xoá</th>
          </tr>
        </thead>
        <tbody>
          {projects && projects.length > 0
            ? projects.map((p, i) => (
                <tr key={i}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      name={p.id}
                      onChange={(e) => onCheckDeleteHandler(e, p.id)}
                    />
                  </td>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.status}</td>
                  <td>{p.customer}</td>
                  <td>{p.endDate}</td>
                  <td>
                    <Button onClick={() => onDelete(p)} className="btn-danger">
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      <div className="pagination mt-4 d-flex justify-content-center">
        {page ? (
          <Pagination
            pagination={page}
            callFetchList={() => console.log("changepage")}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Projects;
