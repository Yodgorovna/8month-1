import React from "react";
import { Table } from "antd";
import { data } from "./data";
import { nanoid } from "nanoid";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //   },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

export const Home = () => {
  const dataSource = data.map((item) => ({
    key: nanoid(),
    id: item.id,
    name: item.name,
    email: item.email,
  }));
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};
