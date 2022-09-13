import { useAuth } from "../hooks/auth";
import LoginForm from "../components/LoginForm";

const Home = () => {
  const { onLogin } = useAuth();
  const handlers = { loginSubmit: onLogin };
  return (
    <>
      <div className="p-2">
        <LoginForm handlers={handlers} />
      </div>
    </>
  );
};

export default Home;
