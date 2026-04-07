import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();
  return (
    <Layout title="Wedding Day — Владислав и Татьяна">
      <Home />
    </Layout>
  );
}
