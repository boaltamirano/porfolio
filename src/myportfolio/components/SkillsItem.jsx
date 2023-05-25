import "../styles/technology.css"

export const SkillsItem = ({name, img}) => {
    return (
        <div className="tech-body">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}
