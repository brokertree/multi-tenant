import { useRouter } from "next/router";
import Layout from "../../components/app/Layout";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

// TODO
// 1. for the authenticated show the data;
// 2. Only the authenticated users can write on their profiles | DONE on supabase

const AppPage = () => {
  const user = useUser();
  const router = useRouter();
  const supabase = useSupabaseClient();

  const onHandleSingOut = () => {
    supabase.auth.signOut();
    void router.replace("/login");
  };

  return (
    <Layout>
      <h1>This is my app when the user is logged in</h1>
      <p>{user?.email}</p>
      <span
        className="block mt-2 rounded-lg py-2 px-3 text-xl font-semibold text-white cursor-pointer"
        onClick={onHandleSingOut}
      >
        Sign out
      </span>
    </Layout>
  );
};

export default AppPage;
