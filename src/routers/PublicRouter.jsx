import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/Context";

const PublicRouter = ({ children }) => {
  const { user, loading } = useUser();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && user) {
      navigate("/", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return !user ? children : null;
};

export default PublicRouter;