const Admin = () => {
  return (
    <div>
      <h1>WP Admin</h1>
    </div>
  );
};

export async function getStaticProps() {
  return {
    redirect: {
      destination: "https://daniell409.sg-host.com/wp-admin/",
    },
  };
}

export default Admin;
