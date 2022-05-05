import React,{useContext,useEffect} from 'react';
import UserContext from '../context/USER/auth/UserContext';


const About = () => {
  const a = useContext(UserContext);
  useEffect(() => {
    a.update(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps   
  }, []);
  
  return (
    <div>
      This is about section {a.state.name} and he is in class {a.state.class}
    </div>
  )
}

export default About
