import React, { useState, useEffect } from "react"
import Card from "./Card";
import emogiList from "./emogiList.json"
import "./EmojiTask.css"

function EmojiTask() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        const NewData = emogiList.filter(emoji => (emoji.title.toLowerCase().includes(search.toLowerCase())))
        setData(NewData)
    }, [search])
    return (
        <div className="App">
            <h1>Emoji Search</h1>
            <input type="text" placeholder="enter a Emojiname" value={search} onChange={(e) => setSearch(e.target.value)} />
            <div class="row mb-4 mx-5 mt-4">
                {data.slice(0, 12).map((emoji, index) =>
                    <div class="col-md-3 mb-5">
                        <div class="shadow-box-example" onClick={() => { navigator.clipboard.writeText(emoji.symbol); alert("Emoji Copied") }}>
                            <Card title={emoji.title} symbol={emoji.symbol} />
                        </div>
                    </div>
                )}
            </div>
        </div>


    )
}

export default EmojiTask