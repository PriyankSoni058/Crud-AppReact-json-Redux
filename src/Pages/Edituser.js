import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom'; 
import { useDispatch,useSelector } from 'react-redux';
import { getSingleUser, updateUser } from '../Redux/actions';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));

const Edituser = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        name:"",
        email:"",
        contact:"",
        address:"",
    });

const [error, setError] = useState("")
 let {id} = useParams();
 const {users} = useSelector(state => state.data);
 console.log(users)
 let history = useHistory();
 let dispatch = useDispatch();
const {name, email, contact, address} = state;

useEffect(() => {
      dispatch(getSingleUser(id))
      console.log("data", getSingleUser(id))
}, []);

useEffect(() => {
   if (users) {
       setState({...users})
   }
}, [users])
    
const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value });
}

const handleSubmit = (e) => {
    e.preventDefault(e); 
    if(!name && !address && !email && !contact) {
        setError ("Please input all input Field");
    } else{
         dispatch(updateUser(state, id));
         history.push("/");
         setError("");
    }
};


  return (
    <div>
        <Button variant="contained" color="secondary" style={{width: "100px", marginTop:"20px"}} onClick={() => history.push("/")} >Go Back</Button>
        <h2>Edit User</h2>
    {error && <h3 style={{color:"red"}}>{error}</h3>}

     <form className={classes.root} onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Name" value={name ||""} name="name" type="text" onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="Email" value={email ||""} name="email" type="email" onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="Contact" value={contact ||""} name="contact" type="number" onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="Address" value={address ||""} name="address" type="text" onChange={handleInputChange}/>
      <br />
      <Button variant="contained" color="primary" type="submit" style={{width: "100px"}} >Update</Button>
    </form>
    </div>
  )
}

export default Edituser;
