import React, { useContext } from 'react'
import { colors, CommentWrapper, H2, P } from './../components/index';

export default function Comment({comment}) {
    return (
        <CommentWrapper>
            <div style={{ alignSelf: 'flex-start'}}>Made By: 
            <span style={{fontStyle: 'italic'}}>{comment.email}</span>
            </div>
            <H2>{comment.name}</H2>
            <P>{comment.body}</P>
        </CommentWrapper>
    )
}
