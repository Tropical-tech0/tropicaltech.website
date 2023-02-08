import React from "react";
import styles from './index.module.css'
import { useTranslation } from "react-i18next";

//contact card - terceirizacao page
const CardContactGreen: React.FC = () => {

    const { t } = useTranslation()

    return (
        <div className={styles.card}>
            <div className={styles.card_top}>
                <span className={styles.logo}>
                    <img src="/img/icon-business.png" alt="icon-business" />
                    <h4>{t("cardTwoTerceirizacaoTitle")}</h4>
                </span>
                <p>
                    {t("cardTwoTerceirizacaoDescription")}
                </p>
            </div>
            <div className={styles.card_bottom}>
                <h4>{t("cardThreeTerceirizacaoTitle")}</h4>
                <span>
                    <p>{t("cardThreeTerceirizacaoResource1")}</p>
                    <p>{t("cardThreeTerceirizacaoResource2")}</p>
                    <p>{t("cardThreeTerceirizacaoResource3")}</p>
                </span>
                <a href="https://wa.link/6vvx11">
                    {t("cardThreeTerceirizacaoButton")}
                </a>
            </div>
        </div>
    )

}

export default CardContactGreen