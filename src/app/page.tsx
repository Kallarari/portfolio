import CenterName from "@/components/CenterName";
import Footer from "@/components/Footer";
import style from './styles.module.css'

export default function Home() {
  return (
    <main className={style.home_page_container}>
      <CenterName />
      <Footer />
    </main>
  );
}