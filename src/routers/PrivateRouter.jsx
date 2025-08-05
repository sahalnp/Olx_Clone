import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/Context";
import { Spinner } from "../components/spinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useUser();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Spinner />
  }
  
  return user ? children : null;
};

export default PrivateRouter;