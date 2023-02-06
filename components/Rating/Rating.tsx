import { RatingProps } from "./Rating.props"
import cn from 'classnames';
import styles from './Rating.module.css'
import { useEffect, useState, KeyboardEvent } from "react";
import StarIcon from './star.svg';

export const Rating = ({ rating, setRating, className, isEditable = false, ...props }: RatingProps): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArr.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, className, {
                        [styles.filled]: i < currentRating,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpaceBtn(i + 1, e)}
                    />
                </span>)
        })
        setRatingArr(updatedArray);
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) return;
        constructRating(i)
    }

    const onClick = (i: number) => {
        if (!isEditable || !setRating) return;
        setRating(i)
    }

    const handleSpaceBtn = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) return;
        setRating(i);
    }

    return <div
        {...props}
    >
        {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
}