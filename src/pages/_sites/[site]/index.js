import { useRouter } from "next/router";
import supabase from "../../../lib/supabase";

export default function Index(props) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Welcome to {props.full_name} personal page!</h1>
    </>
  );
}

export async function getStaticProps({ params: { site } }) {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("subdomain", site);

  return {
    props: data[0],
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const { data } = await supabase.from("profiles").select("subdomain");

  const paths = data?.map((d) => {
    return { params: { site: d.subdomain } || [] };
  });

  return {
    paths,
    fallback: true,
  };
}
