const Image = ({ imgL, classN, text = "Hi World!" }) => {
    return (
        <>
            <img src={imgL} className={classN}></img>
            <p>{text}</p>
        </>

    );
};

export default Image;