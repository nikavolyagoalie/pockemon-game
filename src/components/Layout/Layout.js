import s from'./style.module.css';

const Layout = ({title, urlBg, colorBg, children}) => {

    const styleRoot = {}
    if (urlBg) {styleRoot.backgroundImage = `url(${urlBg})`}
    if (colorBg) {styleRoot.backgroundColor = colorBg}

    return (
        <section className={s.root}>
            <div className={s.wrapper} style={styleRoot}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.descr} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout