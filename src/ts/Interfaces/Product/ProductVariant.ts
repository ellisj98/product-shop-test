import NullableNumber from "../../Types/NullableNumber";
import NullableString from "../../Types/NullableString";

interface ProductVariant {
    id: number,
    title: string,
    option1: NullableString,
    option2: NullableString,
    option3: NullableString,
    sku: string,
    requires_shipping: boolean,
    taxable: boolean,
    featured_image: NullableString,
    available: boolean,
    price: number,
    grams: number,
    compare_at_price: NullableNumber,
    position: number,
    product_id: number,
    created_at: string,
    updated_at: string,
}

export default ProductVariant;