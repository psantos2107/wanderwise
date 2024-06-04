import { auth } from "../_lib/auth";
import SignUpForm from "../_components/_forms/SignUpForm";

export const metadata = {
  title: "Sign Up",
};

async function SignupPage() {
  const session = await auth();
  return (
    <main>
      <SignUpForm session={session} />
    </main>
  );
}

export default SignupPage;
