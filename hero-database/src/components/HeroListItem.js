const HeroListItem = (props) => {
    return (
        <li>
            {/* the props.hero an individual element/object inside of the mockData array */}
            {/* Do we really need the whole object? Or do we just need the name? */}
            {/* On the purpose of this component */}
            {props.individualHeroName}
        </li>
    )
}

export default HeroListItem;