
type ICard = {
    imgUrl: string,
    orderImg: string
    title: string,
    descriptionTop: string,
    features: string[],
    descriptionBottom: string
}

/*
    only the translation keys of the multilingual system were placed here

    - the original texts stay on the translate files
*/ 
//cards - product page
const cards: ICard[] = [
    {
        imgUrl: "/img/product-page/crm-card.png",
        orderImg: '2',
        title: "productOneTitle",
        descriptionTop: "productOneDescriptionTop",
        features: [
            "productOneResource1",
            "productOneResource2",
            "productOneResource3",
            "productOneResource4",
            "productOneResource5",
        ],
        descriptionBottom: "productOneDescriptionBottom"
    },
    {
        imgUrl: "/img/product-page/marketing.png",
        orderImg: "1",
        title: "productTwoTitle",
        descriptionTop: "productTwoDescriptionTop",
        features: [
            "productTwoResource1",
            "productTwoResource2",
            "productTwoResource3",
            "productTwoResource4",
            "productTwoResource5",
            "productTwoResource6",
            "productTwoResource7",
        ],
        descriptionBottom: "productTwoDescriptionBottom"
    },
    {
        imgUrl: "/img/product-page/automacao.png",
        orderImg: "2",
        title: "productThreeTitle",
        descriptionTop: "productThreeDescriptionTop",
        features: [
            "productThreeResource1",
            "productThreeResource2",
            "productThreeResource3",
            "productThreeResource4",
        ],
        descriptionBottom: "productThreeDescriptionBottom"
    },
    {
        imgUrl: "/img/product-page/img-products.png",
        orderImg: "1",
        title: "productFourTitle",
        descriptionTop: "productFourDescriptionTop",
        features: [
            "productFourResource1",
            "productFourResource2",
            "productFourResource3",
        ],
        descriptionBottom: "productFourDescriptionBottom"
    },
    {
        imgUrl: "/img/product-page/img-products-2.png",
        orderImg: "2",
        title: "productFiveTitle",
        descriptionTop: "productFiveDescriptionTop",
        features: [
            "productFiveResource1",
            "productFiveResource2",
            "productFiveResource3",
        ],
        descriptionBottom: "productFiveDescriptionBottom"
    },
]

export default cards