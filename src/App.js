import { Fade, Modal, TextField } from '@mui/material';
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import AddComment from './AddComment/AddComment';
import './App.css';
import Comment from './Comment/Comment';
import { AppWrapper, H1, Button } from './components/index';

export const Context = createContext();

function App() {
  const [comments, setComments] = useState([]);
  const [offset, setOffset] = useState(0);
  const [modal, setModal] = useState(false);
  const nameRef = useRef();
  const commentRef = useRef();

  const fetchComments = useCallback(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=20&_start=${offset}`);
    const newComments = await res.json();
    setComments(prevComments => [...prevComments, ...newComments]);
    setOffset(prevOffset => prevOffset + 20);
  }, [offset]);

  const addComment = useCallback(async (comment) => {
    try {
      // insert new comment to the array
      setComments(prevComments => [...prevComments, comment]);

      const res = await fetch('http://test.steps.me/test/testAssignComment', {
        method: 'POST',
        body: JSON.stringify(comment)
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Context.Provider value={{ setModal }}>

      <AppWrapper>
        <header style={{ display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', alignSelf: 'stretch' }}>
          <H1>My Comments</H1>
          <AddComment />
        </header>

        <div style={{ width: '70%', maxWidth: '700px' }}>
          <InfiniteScroll key={`comments-infinite`} pageStart={0} loadMore={fetchComments} hasMore>
            {comments.map((comment) => {
              return <Comment comment={comment} key={comment.id} />
            })}
          </InfiniteScroll>
        </div>

        <Modal open={modal} onClose={() => {
          setModal(false)
        }} >
          <Fade in={modal}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '15px', justifyContent: 'center', backgroundColor: '#ffffff', width: '375px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }} onSubmit={(e) => {
                e.preventDefault();
                const comment = {
                  name: nameRef.current.value,
                  body: commentRef.current.value,
                  email: 'shwartz.shahar1991@gmail.com',
                  postId: 1 // this is arbitrary 
                }
                setModal(false);
                addComment(comment);
              }}>
                <TextField
                  inputRef={nameRef}
                  fullWidth
                  label="Name"
                  name="name"
                />
                <TextField
                  inputRef={commentRef}
                  fullWidth
                  label="Comment"
                  name="comment"
                  multiline
                  maxRows={4}
                />
                <Button type="submit">Add Comment</Button>
              </form>
            </div>
          </Fade>
        </Modal>
      </AppWrapper>
    </Context.Provider>
  );
}

export default App;
