const Layout = ({ children }) => {
  // I need to see is this is the best way to do this
  return <div className="max-w-2xl p-10">{children}</div>;
};

export default Layout;
