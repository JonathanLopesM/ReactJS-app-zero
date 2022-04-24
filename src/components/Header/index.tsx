import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.postHeader}>
      <Link href="/">
        <a>
          <Image src="/logo.svg" width={250} height={100} alt="logo" />
        </a>
      </Link>
    </header>
  );
}
