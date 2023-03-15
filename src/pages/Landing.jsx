import Login from "../components/Login";
import SignUp from "../components/SignUp";
// import SignUp from "../components/SignUp";


const [pressed, setPressed] = useState(false);
function press() {
if (pressed == false) {setPressed(true)} else {setPressed(false)}}

const component = pressed ? <SignUp onClick(press)/> : <Login onClick(press)/>;




function Landing() {
  return (
    <div>
      <Login />
      <SignUp />
    </div>
  );
}

export default Landing;
