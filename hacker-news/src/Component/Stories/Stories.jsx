import "./Stories.css";
import { getHackerIds } from "../../Services/idsService";
import { useEffect, useState } from "react";
import { getHackerNews } from "../../Services/newsService";



export const Stories = () => {


    const [top10Ids, setTop10Ids] = useState([]);

    getHackerIds().then((top10Ids) => {
        let tenIds = top10Ids.slice(0, 10);
        setTop10Ids(tenIds)
    });

    const uniqueId = top10Ids[0];

    const [top10Stories, setTop10Stories] = useState([]);

    useEffect(() => {
        getHackerNews(uniqueId)
            .then((news) => {
                setTop10Stories(news.title)
            })
    }, [])


    return (
        <div>
            <p></p>
        </div>
    )
}