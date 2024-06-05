import LoginForm from "../_components/_forms/LoginForm";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Login",
};

export default async function LoginPage() {
  const session = await auth();

  return (
    <main>
      <LoginForm session={session} />
    </main>
  );
}
