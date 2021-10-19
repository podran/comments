import React, { useContext } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FloatingButton, SquareButton } from './../components/index';
import { Context } from './../App';

export default function AddComment() {
    const {setModal} = useContext(Context);

    return (
        <FloatingButton>
            <SquareButton active onClick={() => setModal(true)}>
                <AddCircleOutlineIcon />
                Add Comment
            </SquareButton>
        </FloatingButton>
    )
}
