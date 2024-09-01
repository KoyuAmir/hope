import React, { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { graycolor } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  send as SendIcon, 
}
from "@mui/icons-material";
const Chat = () => {
  const containerRef = useRef(null);
  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={graycolor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      ></Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack>
          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <InputBox />
          <IconButton>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </Fragment>
  );
};

export default AppLayout()(Chat);
