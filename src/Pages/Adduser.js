import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addUsers } from '../Redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));

const Adduser = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        name:"",
        email:"",
        contact:"",
        address:"",
    });

const [error, setError] = useState("")

 let history = useHistory();
 let dispatch = useDispatch();

const {name, email, contact, address} = state;
    
const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value });
}

const handleSubmit = (e) => {
    console.log(state)
    e.preventDefault(); 
    if(!name ) {
        setError ("Please input all input Field");
        // console.log(setError)
    } else{
         dispatch(addUsers(state));
         console.log(addUsers(state))
         history.push("/");
         setError("");
    }
};


  return (
    <div>
        <Button variant="contained" color="secondary" style={{width: "100px", marginTop:"20px"}} onClick={() => history.push("/")} >Go Back</Button>
        <h2>Add User</h2>
    {error && <h3 style={{color:"red"}}>{error}</h3>}

     <form className={classes.root} noValidate autoComplete="off" >
      <TextField id="standard-basic" label="Name" value={name} name="name" type="text" required onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="Email" value={email} name="email" type="email" required onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="Contact" value={contact} name="contact" type="number" required onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="Address" value={address} name="address" type="text"  required onChange={handleInputChange}/>
      <br />
      <Button onClick={handleSubmit}  variant="contained" color="primary" type="button" style={{width: "100px"}}>Submit</Button>
    </form>
    </div>
  )
}

export default Adduser;
