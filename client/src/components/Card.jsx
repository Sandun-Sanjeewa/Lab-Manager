const Card = ({ CardClass, TopicClass, topic , content }) => {
    return (
        <>
            <div className={` ${CardClass}`}>
                <div className={` ${TopicClass}`}>
                    {topic}
                    <div className="flex justify-center items-center text-black text-5xl">
                        {content}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;