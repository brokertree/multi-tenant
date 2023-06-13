import { useSession } from "@supabase/auth-helpers-react";
import AuthForm from "../../../components/app/AuthForm";
import Layout from "../../../components/app/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      void router.replace("/");
    }
  }, [session, router]);

  return (
    <Layout>
      <h1>My login page</h1>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
