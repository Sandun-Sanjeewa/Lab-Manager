const Card = ({ CardClass, TopicClass, topic , content }) => {
    return (
        <>
            <div className={`md:rounded-xl hover:bg-gray-900 hover:text-gray-100 ${CardClass}`}>
                <div className={`md:rounded-xl hover:bg-gray-900 hover:text-gray-100 ${TopicClass}`}>
                    {topic}
                    <div className="flex justify-center items-center  hover:text-gray-100 text-5xl">
                        {content}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;