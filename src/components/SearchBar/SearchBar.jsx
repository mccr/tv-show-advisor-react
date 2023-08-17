import React from "react";
import style from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar() {
  return (
    <>
      <SearchIcon size={27} className={style.icon} />
      <input
        className={style.input}
        type="text"
        placeholder="Search a tv show"
      />
    </>
  );
}
