import React from "react";
import styles from "./index.module.css"

//components
import CardContactGreen from "@/components/cardContactGreen";

//services section - terceirizacao page
const SectionServices: React.FC = () => {

    return (
        <section className={styles.services_section}>
            <div className={styles.card_one}>
                <p>SERVIÇOS SOB MEDIDA</p>
                <h4>para sua organização</h4>
            </div>
            <CardContactGreen/>
            <div>
                
            </div>
        </section>
    )

}

export default SectionServices