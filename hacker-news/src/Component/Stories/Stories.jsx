import "./Stories.css";
import { getHackerIds } from "../../Services/idsService";
import { useEffect, useState } from "react";
import { calculateTime } from "../../Services/calculateTime";
import { showBaseUrl } from "../../Services/showBaseUrl";




export const Stories = () => {

    const [top10Ids, setTop10Ids] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getHackerIds()
            .then(myresponse => setTop10Ids(myresponse));
    }, [])


    useEffect(() => {
        const promises = [];
        top10Ids.forEach(uniqueId => {
            promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${uniqueId}.json?print=pretty`).then(res => res.json()))
        })
        Promise.all(promises).then(listOfStories => setStories(listOfStories))
    }, [top10Ids])

    if (!(stories.length === 10)) {
        return (
            <div>Loading page...</div>
        )
    } else
        return (
            <div className='main'>
                <ol>
                    {

                        stories.map((story, index) => {
                            return (

                                <li key={index}>
                                    <div className='onenews' key={index}>
                                        <p className='firstrow'>
                                            <span className='title'>{story.title}</span> 
                                            <span className='url'><small className='brackets'> ( </small>{showBaseUrl(story.url)} <small className='brackets'>)</small></span>
                                        </p>
                                        <p>
                                            <span className='points'><i className="fas fa-heart"></i>{` `}{story.score} points</span> <span className='author'><i className="fal fa-user"></i>{` `}{story.by}</span> <span className='time'><i className="far fa-clock"></i>{calculateTime(`${story.time}`)}</span>
                                            <span className='comments'>{`   ${story.kids.length} comments`}</span>
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>

            </div>


        )
}
