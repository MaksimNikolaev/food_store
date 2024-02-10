import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";
import styles from './home.module.css';


export const Home = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Footer/>
    </div>
  )
}
