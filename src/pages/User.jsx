import { useLocation } from 'react-router-dom';

const User = () => {
    const location = useLocation();
    const name = location.state.name;
    const email = location.state.email;
    const photoURL = location.state.photoURL;

    return (
        <>
            <h1>{name}</h1>
            <p>{email}</p>
            <img src={photoURL} alt="" />
        </>
    );
}
 
export default User;