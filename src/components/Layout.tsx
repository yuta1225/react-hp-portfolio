import Header from "./Header";
import Footer from "./Footer"

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div id="App">
      <div id="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

