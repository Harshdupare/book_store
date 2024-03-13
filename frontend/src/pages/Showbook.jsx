import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const Showbook = () => {
  const [book,setBook] = useState([]);
  const [loading,setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=' container my-2' >
      <Backbutton/>
        <h1 className='my-8' >Show book</h1>
        { loading ?(
          <Spinner/>
        ) : (
            <div className='d-flex flex-column mb-3 border border-black rounded-4 border-3' style={{'padding' : '20px'}}>
              <div className='my-2 p-2 '>
                <span className='text-ml fw-medium'>id : </span>
                <span>{book._id}</span>
              </div>  
              <div className='my-2 p-2'>
                <span className='text-ml fw-medium'>Title : </span>
                <span>{book.title}</span>
              </div>  
              <div className='my-2 p-2'>
                <span className='text-ml fw-medium'>Author : </span>
                <span>{book.author}</span>
              </div>  
              <div className='my-2 p-2'>
                <span className='text-ml fw-medium'>Publish year : </span>
                <span>{book.publishYear}</span>
              </div>  
              <div className='my-2 p-2'>
                <span className='text-ml fw-medium'>Create-Time : </span>
                <span>{new Date(book.createdAt).toString()}</span>
              </div>  
              <div className='my-2 p-2'>
                <span className='text-ml fw-medium'>Updated-Time : </span>
                <span>{new Date(book.updatedAt).toString()}</span>
              </div>  

            </div>
        )} 
    </div>
  );
}

export default Showbook
