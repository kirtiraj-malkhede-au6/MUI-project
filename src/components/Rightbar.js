import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084__340.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://image.shutterstock.com/image-illustration/3d-cartoon-character-brunette-woman-260nw-2070836528.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://image.shutterstock.com/z/stock-vector-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration-604160576.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://static.vecteezy.com/system/resources/previews/004/773/704/non_2x/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084__340.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://image.shutterstock.com/image-illustration/3d-cartoon-character-brunette-woman-260nw-2070836528.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://static.vecteezy.com/system/resources/previews/004/773/704/non_2x/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084__340.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://image.shutterstock.com/image-illustration/3d-cartoon-character-brunette-woman-260nw-2070836528.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList col={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
