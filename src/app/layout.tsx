import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const sans = Open_Sans({ subsets: ['latin'], display: 'swap', weight: '400' });

export const metadata: Metadata = {
    title: '멋진 기적 사이트',
    description: '기저귀를 판매하는 곳입니다.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={sans.className}>
                <header className={styles.header}>
                    <h1>D래곤 Note</h1>
                    <nav className={styles.nav}>
                        <Link href="/contact">Contact</Link>
                        <Link href="/about">About</Link>
                        <Link href="/product">Products</Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
