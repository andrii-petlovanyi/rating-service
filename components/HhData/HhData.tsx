import { HhDataProps } from "./HhData.props"
import cn from 'classnames';
import styles from './hhData.module.css'
import { Card } from "../Card/Card";
import RateIcon from './rate.svg';
import { price } from "../../helpers/price";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {

    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Vacancy count</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Junior salary</div>
                    <div className={styles.salaryValue}>{price(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Middle salary</div>
                    <div className={styles.salaryValue}>{price(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Senior salary</div>
                    <div className={styles.salaryValue}>{price(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
}