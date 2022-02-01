import { createTheme, FormControl, InputLabel, MenuItem, Select, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./Header.css";

const Header = ({setCategory, category, word, setWord, lightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#3b5360" : "#fff"
            },
          type: lightMode ? 'light' : 'dark',
        },
      });

    const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    };

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="outlined-basic" label="Search a word" variant="outlined" style={{width: '25vw'}} className="search" value={word} onChange={(e) => setWord(e.target.value)}/>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" className="select" value={category} label="Language" style={{width: '15vw'}} onChange={(e) => handleChange(e)}>   
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="hi">Hindi</MenuItem>
                            <MenuItem value="es">Spanish</MenuItem>
                            <MenuItem value="fr">French</MenuItem>
                            <MenuItem value="ja">Japanese</MenuItem>
                            <MenuItem value="ru">Russian</MenuItem>
                            <MenuItem value="de">German</MenuItem>
                            <MenuItem value="it">Italian</MenuItem>
                            <MenuItem value="ko">Korean</MenuItem>
                            <MenuItem value="pt-br">Brazilian Portuguese</MenuItem>
                            <MenuItem value="ar">Arabic</MenuItem>
                            <MenuItem value="tr">Turkish</MenuItem>
                        </Select>
                    </FormControl>
                </ThemeProvider>
            </div>
        </div>
    )
};

export default Header;
