import CenterName from "@/components/CenterName";
import HomeFooter from "@/components/HomeFooter";
import style from './styles.module.css'

export default function Home() {
  return (
    <main className={style.home_page_container}>
      <CenterName />
      <HomeFooter />
    </main>
  );
}