import { auth } from "../_lib/auth";
import SignUpForm from "../_components/_forms/SignUpForm";

export const metadata = {
  title: "Sign Up",
};

async function SignupPage() {
  const session = await auth();
  return (
    <main className="w-[95%] mx-auto max-w-screen-xl">
      <SignUpForm session={session} />
    </main>
  );
}

export default SignupPage;
