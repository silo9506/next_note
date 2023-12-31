import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '멋진 기적 사이트 | 전체 기저귀 확인',
    description: '전체 기저귀들을 확인해보세요',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href="/products/women">여성옷</Link>
                <Link href="/products/man">남성옷</Link>
            </nav>
            <section className={styles.product}>{children}</section>
        </>
    );
}
