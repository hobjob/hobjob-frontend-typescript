import React from "react";
import {Helmet} from "react-helmet";
import {useSearchParams} from "react-router-dom";

import {HomeMainSection, ShopSection, CategoriesSection} from "../components/";

const Home: React.FC = () => {
    const [search] = useSearchParams();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        const ref = search.get("ref");

        if (ref) {
            localStorage.setItem("ref", ref);
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>HobJob - курсы для творческих людей</title>
            </Helmet>

            <HomeMainSection />

            <ShopSection
                title="Учитесь на практике"
                description="Обучайтесь у лучших профессионалов своего дела и раскройте самые сокровенные секреты творческого мира"
            />

            <CategoriesSection />
        </>
    );
};

export default Home;
