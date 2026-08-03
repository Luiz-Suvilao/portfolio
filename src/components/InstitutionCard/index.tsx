import {
    FaBuilding,
    FaCalendarAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

import { useTheme } from "../../hooks/theme";

import styles from "./institutionCard.module.scss";

interface Props{
    company:string;
    client:string;
    role:string;
    location:string;
    startAt:string;
    endAt:string;
    type:string;
    technologies:string[];
    description:string;
}

export default function InstitutionCard({

                                            company,
                                            client,
                                            role,
                                            location,
                                            startAt,
                                            endAt,
                                            type,
                                            technologies,
                                            description

                                        }:Props){

    const {isDarkTheme}=useTheme();

    return(

        <article
            className={`${styles.card}
            ${isDarkTheme ? styles.dark : styles.light}`}
        >

            <span className={styles.dot}></span>

            <div className={styles.header}>

                <div>

                    <h3>{role}</h3>

                    <span>{company}</span>

                </div>

            </div>

            <div className={styles.info}>

                <span>
                    <FaBuilding/>
                    {client}
                </span>

                <span>
                    <FaMapMarkerAlt/>
                    {location}
                </span>

                <span>
                    <FaCalendarAlt/>
                    {startAt} • {endAt}
                </span>

            </div>

            <p>
                {description}
            </p>

            <div className={styles.techs}>

                {technologies.map((tech)=>(

                    <span key={tech}>
                        {tech}
                    </span>

                ))}

            </div>

        </article>

    );

}