import Counter from '@/components/Counter';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <h1>홈페이지다 이말이야!</h1>
            <Image
                src="http://www.sputnik.kr/article_img/202209/article_1663979627.jpg"
                alt="hoho"
                width="400"
                height="400"
            />
            <Counter />
        </>
    );
}
