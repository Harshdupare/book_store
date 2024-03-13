import React ,{useState} from 'react';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {useNavigate,useParams } from 'react-router-dom';

const Deletebook = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDeleteBook=()=>{
    setLoading(true);
  
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(()=>{
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        setLoading(false);
        alert('An error happened. Please Chack console!!');
        console.log(error);
      })
    
  };
  
  return (
    <div className='container my-2'>
      <Backbutton/>
      {loading? <Spinner/>:''}
      <h1 className='my-8' >Delete book</h1>
      <div className='text-center w-75 border border-black rounded-4 border-3' style={{'position':'relative','left':'150px'}}>
        <h1 className=' fs-4  my-2 mx-4'>Are you sure you want to delete this book.</h1>
        <button className='btn btn-danger w-25 my-2 mx-4' onClick={handleDeleteBook}>Yes,delete it.</button>
      </div>      
    </div>
  )
}

export default Deletebook
