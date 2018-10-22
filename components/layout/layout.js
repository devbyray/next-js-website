import Header from "./header";

const Layout = props => (
  <div>
    <Header />
    <h1>My website</h1>
    {props.children}
  </div>
);

export default Layout;
