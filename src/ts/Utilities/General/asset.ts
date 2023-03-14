const asset = (path: string) => {
    return new URL(`../../../assets/${path}`, import.meta.url).href;
}

export default asset;