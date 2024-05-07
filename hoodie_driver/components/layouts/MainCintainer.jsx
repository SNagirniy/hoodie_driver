import s from './index.module.scss'

const MainContainer = ({children})=> {
    return (
        <div className={s.main_container}>{children}</div>
    )
};

export default MainContainer;