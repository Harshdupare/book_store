import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';

const Home = () => {
    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5555/books')
          .then((res) => {
            setBooks(res.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);
  return (
    <div className='container'>
        <div className="d-flex justify-content-between my-3 p-2">
            <h1 className='my-8'>Book list</h1>
            
            <Link to='/books/create'>
                <p className='d-sm-inline-flex mx-2 ' style={{'color':'black'}}>Create-book</p>
                <MdOutlineAddBox className='text-info-emphasis text-xl fs-4' />
            </Link>            
        </div>
        {loading?(
            <Spinner/>
        ):(
            <table className='grid gap-3 text-center w-100 border-3 ' style={{'borderCollapse': "separate" , 'borderSpacing': '15px'}}>
                <thead>
                        <tr>
                            <th className='border border-black p-2 g-col-6 rounded-4'  >No.</th>
                            <th className='border border-black p-2 g-col-6 rounded-4' >Title</th>
                            <th className='border border-black p-2 g-col-6 rounded-4' >Author</th>
                            <th className='border border-black p-2 g-col-6 rounded-4' >PublishYear</th>
                            <th className='border border-black p-2 g-col-6 rounded-4' >Operations</th>
                        </tr> 
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book._id} className=' grid gap-3 w-100 text-center border-3'>
                            <td className='border border-black p-2 g-col-6 rounded-4' >
                                {index +1}
                            </td>
                            <td className='border border-black p-2 g-col-6 rounded-4' >
                                {book.title}
                            </td>
                            <td className='border border-black p-2 g-col-6 rounded-4' >
                                {book.author}
                            </td>
                            <td className='border border-black p-2 g-col-6 rounded-4' >
                                {book.publishYear}
                            </td>
                            <td className='border border-black p-2 g-col-6 rounded-4' >
                                <div className='flex'>
                                    <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle className='text-2xl mx-2 text-info'/>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className='text-2xl mx-2 text-warning'/>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className='text-2xl mx-2 text-danger'/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
             </table>
        )}
    </div>
  )
}

export default Home
