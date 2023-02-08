import React from "react";
import styles from "./index.module.css"
import { useTranslation } from "react-i18next";

//components
import CardContactGreen from "@/components/cardContactGreen";

//services section - terceirizacao page
const SectionServices: React.FC = () => {

    const { t } = useTranslation()

    return (
        <section className={styles.services_section}>
            <div className={styles.card_one}>
                <p>{t("cardOneTerceirizacaoTitle")}</p>
                <h4>{t("cardOneTerceirizacaoSubtitle")}</h4>
            </div>
            <CardContactGreen/>
            <div className={styles.card_three}>
                <span className={styles.content}>
                    <h4>{t("cardFourTerceirizacaoTitle")}</h4>
                    <p>
                        {t("cardFourTerceirizacaoDescription")}
                    </p>
                    <a href="https://wa.link/6vvx11">
                        {t("cardFourTerceirizacaoButton")}
                    </a>
                </span>
            </div>
        </section>
    )

}

export default SectionServices