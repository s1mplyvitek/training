const Image = ({ imgL, classN, text = "Hi World!" }) => {
    return (
        <>
            <img src={imgL} className={"App-logo " + classN}></img>
            <p>{text}</p>
        </>

    );
};

export default Image;