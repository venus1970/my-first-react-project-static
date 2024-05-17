import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import { useSearchParams } from "react-router-dom";
import { FormControl, OutlinedInput } from "@mui/material";
import { Box } from "@mui/material";

const SearchBar = () => {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();

  const handleChange = ({ target }) => setSearch({ q: target.value });

  const handleSearch = () => {
    const query = searchParams.get("q");
    // Your search logic here
    console.log("Search triggered with query:", query);
  };

  return (
     <Box display="flex" alignItems="center" justifyContent="flex-end">
      <FormControl variant="standard" style={{ marginRight: "20px" }}>
        <OutlinedInput
          style={{ width: "200px", backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
          placeholder="Search"
          size="small"
          value={searchParams.get("q") ?? ""}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
