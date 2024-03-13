import React ,{useState} from 'react';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () =>{
    const data ={
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
          setLoading(false);
          navigate(`/`);
      })
      .catch((error)=>{
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);

      });
  };
  return (
    <div className='container my-2 ' >
      <Backbutton/>
      <h1 className='my-8' >Create book</h1>
      {loading ? <Spinner/>: ''}
      <div className='text-center border border-black rounded-4 border-3 '>
        <div className='my-2 mx-4 '>
          <label className='mx-2 fs-4 '>Title</label><br/>
          <input 
            type='text' 
            value={title} 
            onChange={(e)=> setTitle(e.target.value) }
            className='w-50 rounded-2 p-2'
          />
        </div>
        <div className='my-2 mx-4 position-relative '>
          <label className='mx-2 fs-4'>Author</label><br/>
          <input 
            type='text' 
            value={author} 
            onChange={(e)=> setAuthor(e.target.value)}
            className='w-50 rounded-2 p-2'
          />
        </div>
        <div className='my-2 mx-4 position-relative '>
            <label className='mx-2 fs-4'>Publish-Year</label><br/>
            <input 
              type='number' 
              value={publishYear} 
              onChange={(e)=> setPublishYear(e.target.value)}
              className='w-50 rounded-2 p-2'
            />
        </div>
         <button className='btn btn-primary w-25 my-2 mx-4' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default Createbook
