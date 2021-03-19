import { useAuth } from "Context/AuthContext";
import { SigninForm } from "./SinginForm";

export function Protected({ children }) {
  const { getCurrentUser } = useAuth();
  const user = getCurrentUser();
  console.log(user);
  if (!user) {
    return <SigninForm />;
  }

  return children;
}
