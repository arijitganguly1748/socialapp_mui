import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import PostCardList from '../PostCardList/PostCardList';
import UserList from "../UserList/UserList";

export default function MainContainer() {
  return (
    <Box  sx={{ width: "100%", mt: "3rem" }}>
      <Grid container alignItems={'start'} justifyContent={'space-around'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Grid>
          <UserList />
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          xs={12}
          md={6}
        >
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}
