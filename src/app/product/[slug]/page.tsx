import React from 'react';
import { notFound } from 'next/navigation';
import { getProducts, getProduct } from '@/service/products';
import Image from 'next/image';
import GoProductButton from '@/components/GoProductButton';
import { redirect } from 'next/navigation';

type Props = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params: { slug } }: Props) {
    return {
        title: `제품명 ${slug}`,
    };
}

export default async function page({ params: { slug } }: Props) {
    const product = await getProduct(slug);
    if (!product) {
        return redirect('/product');
    }
    return (
        <>
            <Image src={`/images/${product.img}`} width={300} height={300} alt={product.name} />
            <GoProductButton />
            <div>{product.name}다 이말이야~</div>
        </>
    );
}

export async function generateStaticParams() {
    const products = await getProducts();

    return products.map((product) => ({
        slug: product.id,
    }));
}
