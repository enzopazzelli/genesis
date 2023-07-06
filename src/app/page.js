import Image from 'next/image'
import styles from './page.module.css'
import Bienvenida from '@/components/Bienvenida'
import FetchData from '@/components/User'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started creando componentes en&nbsp;
          <code className={styles.code}>src/components/...</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />{' '} & Genesis Team
          </a>
        </div>
      </div>

      <Bienvenida />
      <FetchData />
     
    </main>
  )
}
