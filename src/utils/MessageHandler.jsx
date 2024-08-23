import { redirectFromSignin } from "../components/SigninForm";

function messageHandler(message, navigate){
    console.log(message);
    if (message.code === 200) {
        redirectFromSignin();
    } else {
        alert(message.content);
    }
}

export default messageHandler