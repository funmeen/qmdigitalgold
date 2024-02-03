import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Modal.css";

export default function UserPage({ onBackClick }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (typeof onBackClick === 'function') {
      onBackClick();
      navigate('/');
    } else {
      console.error('onBackClick is not a function');
    }
  };

  const MemberDisplay = () => {
    const [users, setUsers] = useState(null);
  
    const getMembers = async () => {
      try {
        const response = await fetch(`api/user`);
        const data = await response.json();
  
        if (response.ok) {
          setUsers(data);
        } else {
          console.error('Error:', data.error);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    useEffect(() => {
      getMembers();
    }, []); // Fetch the users when the component mounts
  
    const deleteClick = async (userId) => {
      try {
        const response = await fetch(`/api/user/${userId}`, {
          method: 'DELETE'
        });
  
        if (response.ok) {
          // Remove the deleted user from the state
          setUsers((prevUsers) => prevUsers.filter(user => user._id !== userId));
          console.log('User deleted successfully');
        } else {
          console.error('Error deleting user');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    return (
      <div className='bg-blue-200 p-5'>
        {users && users.map((user) => (
          <div key={user._id}>
            <div className='text-2xl'>{user.fullname}</div>
            <div className='text-lg'>{user.username}</div>
            <div className='text-base'>{user.email}</div>
            <div className='text-sm'>{user.createdAt}</div>
            <button onClick={() => deleteClick(user._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };

  const PostDisplay = () => {
    const [post, setPost] = useState(null);

    const getPost = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/user/post/65bbdb9903c04b8f96533149`);
        const data = await response.json();

        if (response.ok) {
          setPost(data);
        } else {
          console.error('Error:', data.error);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    useEffect(() => {
      getPost();
    }, []); // Fetch the post when the component mounts
    
    return (
      <div className='bg-blue-200 p-5'>
        {post ? (
          <>
            <div className='text-2xl'>{post.header}</div>
            <div className='text-lg'>{post.content}</div>
            <div className='text-base'>{post.author}</div>
            <div className='text-sm'>{post.createdAt}</div>
            <button onClick={() => console.log('Edit')}>Edit</button>
            <button className='ml-5' onClick={() => console.log('Delete')}>Delete</button>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  };

  const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    const [header, setHeader] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handlePosting = async (e) => {
      e.preventDefault()

      const user = {header, content, author}
      const response = await fetch('/api/user/post', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()

      if (!response.ok) {
        setError(json.error)
      }
      if (response.ok){
        setError(null);
        setSuccessMessage('Your post has been upload');
      }
    };

  return (
    <section>
      <div className='flex'>
        <div className='mx-auto p-5'>
          <div className='bg-blue-500 text-2xl font-bold text-white p-5 flex justify-between items-center'>
            Members
          </div>
          <MemberDisplay />
        </div>

        <div className='mx-auto p-5'>
          <div className='bg-blue-500 text-2xl font-bold text-white p-5 flex justify-between items-center'>
            Post
            <button onClick={toggleModal} className="bg-green-500 text-white px-4 py-2 rounded">
              Add
            </button>
      
            {modal && (
              <div className='modal'>
                <div onClick={toggleModal} className='overlay'></div>
                <div className='modal-content'>
                  <div className='text-black'>Add a new member</div>
                  <button className="close-modal" onClick={toggleModal}>
                    X
                  </button>
                    <p>Name</p>
                      <input
                        className="input-style"
                        id="tittle"
                        type="text"
                        placeholder="Enter your username"
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                      />
                    <p>Content</p>
                      <input
                        className="input-style"
                        id="content"
                        type="text"
                        placeholder="Enter your full name"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    <p>Author</p>
                      <input
                        className="input-style"
                        id="author"
                        type="text"
                        placeholder="Enter your full name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    <button className="postButton" onClick={handlePosting}>
                      Upload
                    </button>
                    {error && <div className="error">{error}</div>}
                    {successMessage && <div className="success">{successMessage}</div>}
                </div>
              </div>
            )}
          </div>
          <PostDisplay />
        </div>
      </div>
      <button onClick={handleBackClick} className='bg-yellow-300 p-4'>
        Back to Home
      </button>
    </section>
  );
}
