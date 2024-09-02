import React, { useState } from 'react'
import {Dialog, DialogTitle,Typography, Button, Stack} from "@mui/material";
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';
const AddMemeberDialog = ({addMember, isLoadingAddMember, chatId}) => {

    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);
  
    const selectMemberHandler = (id) => {
  
      // setMembers(prev=> prev.map(user=>user._id===id?{...user,isAdded:!user.isAdded}: user))
  
      setSelectedMembers((prev) =>
        prev.includes(id)
          ? prev.filter((currElement) => currElement !== id)
          : [...prev, id]
      );
    };

    const closeHandler = () => {
        setSelectedMembers([]);
        setMembers([]);
    };


    const addMemberSubmitHandler = () => {
        closeHandler();
    };
  return (
    <Dialog open onClose={closeHandler}>
        <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}> Add Member</DialogTitle>
            <Stack spacing={"1rem"}>
                {members.length > 0 ? (
                    members.map(i=>(
                        <UserItem key={i._id} user={i} handler={selectMemberHandler}
                        isAdded={selectedMembers.includes(i._id)}/>
                    ))
                ) : (
                    <Typography textAlign={"center"}> No Friend</Typography>
                )
                }
            </Stack>
            <Stack
            dirrection={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            >
                <Button  color="error" onClick={closeHandler}>
                    cancel
                </Button>
                <Button variant="contained" color="primary" onClick={addMemberSubmitHandler} disabled={isLoadingAddMember}>
                    Submit Change
                </Button>

                {isLoadingAddMember && (
                    <CircularProgress size={20} color="primary" />
                )}

            </Stack>
        </Stack>

    </Dialog>
  )
}

export default AddMemeberDialog
