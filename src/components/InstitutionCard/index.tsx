import { FaBuilding, FaMapMarker, FaCalendar } from 'react-icons/fa';

import styles from './institutionCard.module.scss';

const InstitutionCard = ({
    isDarkTheme,
    locale,
    startAt,
    terminateAt,
    foundation,
    period,
    title
}: {
    isDarkTheme: boolean;
    foundation: string;
    locale: string;
    startAt: string;
    terminateAt: string;
    period?: string;
    title: string;
}) => (
    <div className={`${styles.institution} ${isDarkTheme ? styles.dark : styles.light}`}>
        <div className={styles.wrapperTitle}>
            <h1 className={styles.title}>{title}</h1>
            {period && (<div className={styles.badge}>{period}</div>)}
        </div>

        <div className={styles.wrapperInfo}>
            <div className={styles.locale}>
                <div className={styles.building}>
                    <FaBuilding /> {foundation}
                </div>

                <div className={styles.local}>
                    <FaMapMarker /> {locale}
                </div>
            </div>

            <div className={styles.period}>
                <FaCalendar /> {startAt} - {terminateAt}
            </div>
        </div>
    </div>
);

export default InstitutionCard;
