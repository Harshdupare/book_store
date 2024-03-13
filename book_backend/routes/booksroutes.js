
import express from "express";
import Book from "../models/bookmodel.js";
const Router = express.Router();


Router.post('/', async (req,res) =>{
    try{
        if(
            !req.body.title||
            !req.body.author||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message : 'Send all your required fields : Name, author, publishYear'
            });
        }
        const newbook = {
            title : req.body.title,
            author :  req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newbook); 
         
        return res.status(201).send(book);
        
    }
    catch(error){
        console.log(error);
        res.status(500).send({message : error.message})
    }

});

//routes for getting all books from database
Router.get('/', async (req, res) => {
    try {
      const books = await Book.find({});
  
      return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// routes to get book form the database
Router.get('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);

        return res.status(200).json(book);
    }catch(error){
        console.log(error);
        res.status(500).send({message :  error.message}); 
    }
});

//routes to update a book in database
Router.put('/:id', async(req,res)=>{
    try{
        if(
            !req.body.title||
            !req.body.author||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message : 'Send all your required fields : Name, author, publisYear'
            });
        }

        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(404).json({message : "book not found"});
        }

        return res.status(200).send({message : "book was updated successfully"})

    }catch(error){
        console.log(error);
        res.status(500).send({message :  error.message}); 
    }
});

//routes to delete a book from database
Router.delete('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(500).json('not found the book');
        }

        return res.status(200).send("successfully deleted a book");
    }catch(error){
        console.log(error);
        res.status(500).send({message : error.message});
    }
});

export default Router;