'use client';
import React, { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export default function MeowArticle() {
    const [text, setText] = useState();

    useEffect(() => {
        fetch('https://meowfacts.herokuapp.com')
            .then((res) => res.json())
            .then((data) => setText(data.data[0]));
    }, []);

    return (
        <div>
            <article className={styles.article}>{text ? text : '데이터 준비중...'}</article>
        </div>
    );
}
