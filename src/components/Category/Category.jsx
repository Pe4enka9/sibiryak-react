import './category.css';

// eslint-disable-next-line react/prop-types
export default function Category({img, title}) {
    return (
        <div className="categories__card">
            <div className="card__img" style={{background: `url(${img}) no-repeat center / contain`}}></div>
            <div>{title}</div>
        </div>
    )
}
