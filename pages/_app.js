import Layout from "@/componets/layout/layout";
import "@/styles/globals.css";

// root파일이 되는 app.js는 root루트 파일이라고 생각하면 된다. 이곳에서 최종적인 렌더링을 거침
export default function App({ Component, pageProps }) {
  return (
    // Layout사이에 넣을 수 있는 이유는 Layout컴포넌트에 children 속성을 사용중이기 때문에 가능하다.
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
