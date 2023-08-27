import { getProducts } from '@/service/products';
import { NextResponse } from 'next/server';

export async function GET(requerst: Request) {
    const products = await getProducts();
    return NextResponse.json({ products });
}
