interface ProductImage {
    id: number,
    created_at: string,
    position: number,
    updated_at: string,
    product_id: number,
    variant_ids: Array<number>,
    src: string,
    width: number,
    height: number,
}

export default ProductImage;