import './banner.css';

// eslint-disable-next-line react/prop-types
export default function Banner({title, body, link, linkName, img = ''}) {
    return (
        <section className="banner">
            <div className="banner__img" style={{backgroundImage: `url(${img})`}}></div>
            <h1>{title}</h1>
            <p>{body}</p>
            <a href={link}>{linkName}</a>
        </section>
    )
}
