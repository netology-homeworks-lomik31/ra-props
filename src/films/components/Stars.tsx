import { JSX } from 'react';
import Star from './Star';

function Stars({ count = 0 }: { count: number }) {
    if (count < 0 || count > 5 || typeof count !== 'number')
        return null;

    const stars: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
        stars.push(
            <li key={i}>
                <Star />
            </li>
        );
    }

    return (
        <ul className="card-body-stars u-clearfix">
           {stars}
        </ul>
    )
}

export default Stars;
