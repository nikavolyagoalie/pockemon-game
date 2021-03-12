import s from'./style.module.css'

const HeaderBlock = ({title, hideBackground = false}, descr) => {
    const styleRoot = hideBackground ? {backgroundImage: 'blue'} : {backgroundColor: 'pink'}
    return (
        <div style={styleRoot}>
            <div>
                {
                    title && (<h1 className={s.header}>{title}</h1>)
                }
                {
                    descr && (<p>{descr}</p>)
                }
            </div>
        </div>
    );
}

export default HeaderBlock;