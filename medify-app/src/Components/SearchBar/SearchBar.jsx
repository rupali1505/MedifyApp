import { Button, Stack, TextField } from "@mui/material";
import { useState,useMemo } from "react";

export default function SearchBar({list,filterList}){
    const [inputText, setInputText] = useState("")

    const filteredList = useMemo(()=>{
        if(!inputText.trim()){
            return list;
        }else{
            return list.filter((item)=>item["Hospital Name"].toLowerCase().includes(inputText.trim().toLowerCase()))
        };
    },[inputText,list])

    const handleSubmit=(e)=>{
        e.preventDefault();
        filterList(filteredList)
    };

    return (
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            type="text"
            label="SearchByHospital"
            variant="outlined"
            fullWidth
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            sx={{ py: "15px", px: 8, flexShrink: 0 }}
            disableElevation
          >
            Search
          </Button>
        </Stack>
      </form>
    );

}