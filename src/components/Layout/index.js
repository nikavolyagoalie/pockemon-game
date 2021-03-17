import s from'./style.module.css';
import cn from 'classnames';

const Layout = ({title, urlBg, colorBg, children}) => {

    const styleRoot = {}
    if (urlBg) {styleRoot.backgroundImage = `url(${urlBg})`}
    if (colorBg) {styleRoot.backgroundColor = colorBg}

    return (
        <section className={cn(s.root)}>
            <div className={cn(s.wrapper)} style={styleRoot}>
                <article>
                    <div className={cn(s.title)}>
                        <h3>{title}</h3>
                        <span className={cn(s.separator)}></span>
                    </div>
                    <div className={cn(s.descr, s.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout