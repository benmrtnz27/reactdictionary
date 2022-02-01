import React from 'react';
import "./Definitions.css";

const Definitions = ({word, category, meanings, lightMode}) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio src={meanings[0].phonetics[0].audio} style={{backgroundColor: '#fff', borderRadius: 10}} controls className="audio">
          Your Browser Doesn't Support Audio Playback.
        </audio>
      )
    }
      {word===""?(<span className="subTitle">Start by typing a word in search</span>) : (
        meanings.map((mean) => mean.meanings.map((item) => (
          item.definitions.map((def) => (
            <div className="singleMeaning" style={{backgroundColor: lightMode ? "rgb(105, 105, 105)" : "white", color: lightMode ? "white" : "black"}}>
              <b>{def.definition}</b>
              <hr style={{width: "0%"}}/>
              {
                def.example && (
                  <span>
                    <b>Example: </b>{def.example}
                  </span>
                )
              }
              {def.synonyms && (
                <span>
                  <b>Synonyms: </b>{def.synonyms.map((s) => `${s}, `)}
                </span>
              )}
              <hr style={{backgroundColor: "black", width: "100%"}}/>
            </div>
          ))
        )))
      )}
    </div>
  )
};

export default Definitions;
