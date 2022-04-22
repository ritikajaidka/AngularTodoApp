var Userdb = require('./model');
const { use } = require('./router');

//create and save new user

exports.create = (req,res) =>
{
    console.log(req.body);
    // validate request 
    if(!req.body)
    {
        res.status(400).send({messsage:"Content cant be empty"});
        return;
    }

    //new user
    const user= new Userdb({
        name:req.body.name,
        completed: req.body.completed
    })

    //save user in the database

    user
    .save(user)
    .then(data=>{
       //res.json('User added')
       res.send(data)
      // res.redirect('/');
    })
    .catch(err=>{
        res.status(500).send({
            messsage:err.messsage || "Some error occured while creating a create operation"
        })
    })
}

//retrieve and return all users / retreieve and return a single user

exports.find=(req, res) =>
{
    if(req.query.id){
        const id=req.query.id;
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({messsage:"not found user with id"})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({messsage:"error retrieving user with id"})
        })
    }
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({messsage:err.messsage || "Error occurred while retrieving info"})
    })

}

//update a new identified by user id

exports.update= (req,res)=>
{
    if(!req.body){
        return res
        .status(400)
        .send({messsage:"Data to update cant be empty"})
    }
    const id= req.params.id;
    Userdb.findByIdAndUpdate(id,req.body)
    .then(data=>{
        if(!data)
        {
            res.status(404).send({messsage:`cannot update`})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({messsage:"error update user info"})
    })

}

//delete a user with specified user id in the request
exports.delete =(req,res)=>
{
    const id=req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({messsage:`cant delete data`})
        }
        else{
            res.send({
                messsage:"user was deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            messsage:"could not delete user"
        });
    });
}