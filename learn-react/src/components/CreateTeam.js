import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client';
import { Link, useNavigate } from 'react-router-dom';
import TeamList from './TeamList';

// export default members;

const menuBtn = {
    width: '100%',
    padding: '10px 0px',
    borderStyle: 'inset',
    borderWidth: 'thick',
    fontSize: '1rem',
    cursor:'pointer'
}

const entryStyle = {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    justifyContent:'center',
    height:'fit-content'
}

const heading ={
    position:'absolute',
    top:'0'
}

const inputData = {
    padding: '7px 10px',
    fontSize: 'large',
    borderRadius: '10px',
    borderStyle: 'dashed'
}

const inputGaps = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems:'center',
    height:'65%'
}

const actionBtns = {
    display: 'flex',
    justifyContent: 'space-between',
    width:'100%',
    position:'absolute',
    bottom:'5px'
}

const btn = {
    padding: '4px 8px',
    fontSize: 'medium',
    cursor: 'pointer'
}

const teamContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '85%'
}

const team = {
    color: 'white',
    padding: '10px 15px',
    background: 'rgb(0 229 255 / 50%)',
    borderRadius: '10px',
    fontVariant: 'all-petite-caps',
    fontSize: 'xx-large',
    width: '90%',
    cursor: 'pointer'
}

const insertBtn ={
    width: '100%',
    padding: '10px 0px',
    cursor: 'pointer',
    borderRadius: '7px'
}

export default function CreateTeam() {

    
    let [teamName, setTeamName] = new useState('');
    let [entrys, setEntrys] = new useState(0);
    let [teams, setTeams] = new useState([]);

    // let nickname = '';
    // let email = '';
    // let role = '';

    // const nickname = new useRef(null);

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [members, setMembers] = useState([]);
   

    const handelNickname = (event)=>{
        setNickname(event.target.value)
    }

    const handelEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handelRole = (event)=>{
        setRole(event.target.value)
    }

    // let arr = [];
    const handelGo = (event)=>{
        event.preventDefault();
        const obj = {
            nickname:nickname,
            email:email,
            role : role
        }
        let arr = members;
        arr.push(obj);
        setMembers(arr);
        setNickname('');
        setEmail('');
        setRole('');   

        console.log(members);

        if(entrys == arr.length){
            // event.target.style.display = 'none';
            document.getElementById('heading').innerHTML = "Done!"
            document.getElementById('inputs').style.display = 'none'
        }

    }


    const handleTeamNumber = (event)=>{
        setEntrys(event.target.value);
    }

    const handelTeamName = (event)=>{
        setTeamName(event.target.value);
    }

   

    function handleOverlay(){
        document.getElementById('full').classList.add('active');
    }

    const handleCancel=(event)=>{
        event.preventDefault();
        document.getElementById('full').classList.remove('active');
    }

    const gotoPage1 = (event)=>{
        event.preventDefault();
        document.getElementById('overlay').classList.add('nextPage');

        // const myElement = <div>
        //     <h1>I Love JSX!</h1>
        //     <h1>I Love you!</h1>
        //     </div>;

        // const root = ReactDOM.createRoot(document.getElementById('jhat'));
        // root.render(myElement);
        // console.log(myElement.props.children[1].props.children);
    }

    const gotoPage0 = (event)=>{
        event.preventDefault();
        document.getElementById('overlay').classList.remove('nextPage');
        setMembers([]);

        //Aaisa kuch logic likh ki ye btn dabane se List of members delete ho jae.
        // arr = [];
    }

    const navigate = useNavigate();
        const goToMembers = () => {
            navigate("/teamList", {state : {members : members}})
    }
    

    


    const handleSave =(event)=>{
        event.preventDefault();
       
        
        let array = teams;
        array.push(teamName);
        setTeams(array); 
        setTeamName('');
        setEntrys(0);
            

        document.getElementById('full').classList.remove('active');

        console.log(teams);

        // backend lagana hoga yaha...!!!!

    }



    
  return (
    <>

    <div className="teams">
        <div className="teamsMenu">
            <button onClick={handleOverlay} style={menuBtn}>Create Teams</button>
        </div>
        <div className="teamsContainer" style={teamContainer}>

        {teams.map((e)=>(
                <div style={team} onClick={goToMembers}>{e}</div>
            ))}
        
        </div>
    </div>

<div id="full">
        <div id="overlay">

                <form className="form page0" action="#" onSubmit={event => gotoPage1(event)} >
                <h2 style={heading}>Create Your Team Now!</h2>
                    
                        <input type="text" placeholder='Name of your team' value={teamName} onChange={handelTeamName} style={inputData} required />
                        <input type="number" placeholder='number of members' value={entrys} onChange={handleTeamNumber} style={inputData} required/>
                    
                    <div style={actionBtns}>
                        <button style={btn} className='cancel' onClick={event => handleCancel(event)}>cancel</button>
                        <button style={btn} type='submit' className="next">next</button>
                    </div>
                </form>

                <form className="form page1" action="#" onSubmit={event => handelGo(event)} required>
                <h1 id='heading' style={heading}>Enter Details of member : {members.length+1}</h1>

                <div style={inputGaps} id='inputs'>
                    <div style={entryStyle}>
                    <input type="text" placeholder='Nick Name' value={nickname} onChange={handelNickname} style={inputData} className='nickname' required/>
                    <input type="email" placeholder='Existing Email 'value={email} onChange={handelEmail} style={inputData} required/>
                    <input type="text" placeholder='role' value={role} onChange={handelRole}/>
                    </div>
                        <button type='submit' style={insertBtn}>Insert Member</button>
                </div>

                <div style={actionBtns}>
                    <button style={btn} className='prev' onClick={event => gotoPage0(event)}>prev</button>
                    <button style={btn} className='save' onClick={event => handleSave(event)}>save</button>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

