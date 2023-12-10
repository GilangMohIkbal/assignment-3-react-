import React from "react";
import { useParams } from "react-router-dom";
import { getData } from "../exp";

export default class ExperienceDetail extends React.Component {
  render() {
    // let params = useParams();
    // let items = getData();
    // let selectedItems = items.find(
    //   (item) => item.id === Number(params.experienceId)
    // );
    return (
      <>
        <p>Haloo</p>
        {/* <p>{selectedItems.name}</p> */}
      </>
    );
  }
}
