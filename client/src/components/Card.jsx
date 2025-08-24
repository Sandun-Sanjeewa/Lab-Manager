const Card = ({ CardClass, TopicClass, topic }) => {
    return (
        <>
            <div className={` ${CardClass}`}>
                <div className={` ${TopicClass}`}>
                    {topic}
                </div>
            </div>
        </>
    );
};
export default Card;