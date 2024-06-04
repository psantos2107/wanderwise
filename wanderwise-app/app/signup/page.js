import { createUser } from "../_lib/data-service";

export const metadata = {
  title: "Sign Up",
};

function SignupPage() {
  const formData = {
    name: "Lovely testing!!!!!",
    email: "test@tester.com",
    password: "testingThis",
  };

  createUser(formData.name, formData.email, formData.password);

  return <p>SignupPage</p>;
}

export default SignupPage;
