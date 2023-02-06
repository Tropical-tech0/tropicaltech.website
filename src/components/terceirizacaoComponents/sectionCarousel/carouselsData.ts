type Item = {
    imgUrl: string;
};

type Carousel = {
    slidesToShow: number;
    items: Item[];
};

/**
 * Define the type for the data of each carousel.
 */
type DataCarousels = {
    cloudComputing: Carousel;
    databases: Carousel;
    integrations: Carousel;
    mobileTechnologies: Carousel;
    programmingLanguages: Carousel;
};

/**
 * Define the data for each carousel to be used in the React component.
 */
const dataCarousels: DataCarousels = {
    cloudComputing: {
        slidesToShow: 3,
        items: [
            { imgUrl: "/img/carousel/react.png" },
            { imgUrl: "/img/carousel/wordpress.png" },
            { imgUrl: "/img/carousel/angular.png" },
            { imgUrl: "/img/carousel/node.png" },
            { imgUrl: "/img/carousel/azure.png" },
        ],
    },
    databases: {
        slidesToShow: 3,
        items: [
            { imgUrl: "/img/carousel/sql-server.png" },
            { imgUrl: "/img/carousel/postgres.png" },
            { imgUrl: "/img/carousel/mysql.png" },
            { imgUrl: "/img/carousel/sql-server.png" },
            { imgUrl: "/img/carousel/postgres.png" },
            { imgUrl: "/img/carousel/mysql.png" },
        ],
    },
    integrations: {
        slidesToShow: 3,
        items: [
            { imgUrl: "/img/carousel/twitter.png" },
            { imgUrl: "/img/carousel/facebook.png" },
            { imgUrl: "/img/carousel/mailchimp.png" },
            { imgUrl: "/img/carousel/twitter.png" },
            { imgUrl: "/img/carousel/facebook.png" },
            { imgUrl: "/img/carousel/mailchimp.png" },
        ],
    },
    mobileTechnologies: {
        slidesToShow: 1,
        items: [
            { imgUrl: "/img/carousel/react-native.png" },
            { imgUrl: "/img/carousel/swift.png" },
            { imgUrl: "/img/carousel/android.png" },
        ],
    },
    programmingLanguages: {
        slidesToShow: 3,
        items: [
            { imgUrl: "/img/carousel/twitter.png" },
            { imgUrl: "/img/carousel/facebook.png" },
            { imgUrl: "/img/carousel/mailchimp.png" },
            { imgUrl: "/img/carousel/twitter.png" },
            { imgUrl: "/img/carousel/facebook.png" },
            { imgUrl: "/img/carousel/mailchimp.png" },
        ],
    },
};

export default dataCarousels;