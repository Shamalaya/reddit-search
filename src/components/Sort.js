import React from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectSort, setSort } from "../features/message/messagesSlice";

const Sort = () => {
  let sort = useSelector(selectSort);
  const dispatch = useDispatch();

  return (
    <Form.Group className="col-lg-1 offset-lg-11 ">
      <Form.Label htmlFor="sort">Sort by</Form.Label>
      <Form.Select
        name="sort"
        id="sort"
        className="form-select-sm"
        value={sort}
        onChange={(e) => dispatch(setSort(e.target.value))}
      >
        <option value="newer">Newer</option>
        <option value="older">Older</option>
        <option value="popular">Popular</option>
        <option value="unpopular">Unpopular</option>
      </Form.Select>
    </Form.Group>
  );
};

export default Sort;
