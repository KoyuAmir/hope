import React from "react";
import { Menu } from "@mui/material";
const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing el aspect. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Fugit doloribus
        temporibus commodi laborum beatae quisquam, laboriosam eius velit,
        consequuntur sapiente porro quos exercitationem aperiam reprehenderit
        voluptates, sequi omnis rem mollitia.
      </div>
    </Menu>
  );
};

export default FileMenu;
