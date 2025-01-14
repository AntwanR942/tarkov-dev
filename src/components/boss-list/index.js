import { Link } from 'react-router-dom';

import formatBossData from '../../modules/format-boss-data';
import MenuItem from '../menu/MenuItem';
import LoadingSmall from '../loading-small';
import { useMapsQuery } from '../../features/maps/queries';

import './index.css';


// BossPageList component for the main boss page
export function BossPageList() {
    // Fetch maps
    const { data: maps } = useMapsQuery();

    // If no maps have been returned yet, return 'loading'
    if (!maps || maps.length === 0) {
        return <LoadingSmall />;
    }

    // Format the boss data
    const bossArray = formatBossData(maps);

    // Return the home page boss React component
    return (
        <>
            {bossArray.map((boss) => {

                // Format the boss name for links
                var key = boss.normalizedName;

                return (
                    <Link to={`/boss/${key}`} className="screen-link" key={`boss-${key}`}>
                        <h2 className="center-title">{boss.name}</h2>
                        <img
                            alt={boss.name}
                            loading='lazy'
                            src={`https://assets.tarkov.dev/${key}.jpg`}
                        />
                    </Link>
                )
            })}
        </>
    );
}

// BossListNav component for homepage nav bar
export function BossListNav(onClick) {
    // Fetch maps
    const { data: maps } = useMapsQuery();

    // If no maps have been returned yet, return 'loading'
    if (!maps || maps.length === 0) {
        return null;
    }

    // Format the boss data
    const bossArray = formatBossData(maps);

    // Return the home page nav boss React component
    return (
        <>
            <ul>
                {bossArray.map((boss) => {
                    // Format the boss name for links
                    var key = boss.normalizedName;

                    return (
                        <MenuItem
                            displayText={boss.name}
                            key={key}
                            to={`/boss/${key}`}
                            onClick={onClick.onClick}
                        />
                    )
                })}
            </ul>
        </>
    );
}

// BossList component for homepage
function BossList() {
    // Fetch maps
    const { data: maps } = useMapsQuery();

    // If no maps have been returned yet, return 'loading'
    if (!maps || maps.length === 0) {
        return <LoadingSmall />;
    }

    // Format the boss data
    const bossArray = formatBossData(maps);

    // Return the home page boss React component
    return (
        <>
            {bossArray.map((boss) => {

                // Format the boss name for links
                var key = boss.normalizedName;

                return (
                    <li key={`boss-link-${key}`}>
                        <Link to={`/boss/${key}`} key={`boss-${key}`}>
                            <img
                                alt={boss.name}
                                loading='lazy'
                                className="boss-icon"
                                src={`https://assets.tarkov.dev/${key}-icon.jpg`}
                            />
                            {boss.name}
                        </Link>
                    </li>
                )
            })}
        </>
    );
}

export default BossList;
