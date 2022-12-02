import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigator = useNavigate();

    /* 버튼을 눌렀을 때 구글로 로그인하고, 파이어스토어를 들고와서 사용하려 함 */
    const login = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope("profile");
        provider.addScope("email");

        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            /* 로그인된 결과를 구글 인증을 통해서 확인, 토큰 발급 */
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            /* 로그인된 결과 중에서 user를 통해서 관련 정보를 가져올 수 있다. */
            const user = result.user;
            /* console.log(user)로 확인해볼 수도 있음, 실제 프로젝트에는 표시되지 않게 할 것
            여기서 user는 객체여서 다른 값들도 전달할 수 있다. */
            navigator(`/user`, {state:{
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }});
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    

    return (
        <>
            <h1>홈입니다</h1>
            <button onClick={login}>구글로 로그인하기</button>
        </>
    );
}

export default Home;