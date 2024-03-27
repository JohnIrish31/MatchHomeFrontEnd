import React, { useState } from "react";
import { Box, Grid, Typography, Stack, Paper, Button } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';

function App() {
  return (
    <div className="App">
      <Box className="image" sx={{display: "flex",alignItems: "center"}}>
        <Box sx={{ padding: 10 }}>
          <Stack sx={{ paddingLeft: "10rem" }}>
            <Typography sx={{ color: "#1D3461" }} className="TextBanner">
              AMAIA SCAPES LAGUNA
            </Typography>
            <Typography sx={{ color: "#007366" }} className="TextBanner2">
              PROPERTY LIST
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ background: "#1D3461" }}>
        <Box sx={{ paddingTop: 5, paddingBottom: 3, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "80vw", borderRadius: "20px 20px 20px 20px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingX: "2rem", paddingY: "3rem" }}>
              <Grid  container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#007E66", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
              <Grid container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: 600 }}> <span style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem" }}><MapIcon/></span>View Property Maps</Typography>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Button sx={{ background: "#FFB20C", borderRadius: "20px", color: "black", paddingX: "1.5rem", fontWeight: 700, fontSize: 12.5 }} variant="contained">View Property Full Details</Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ paddingTop: 1, paddingBottom: 3, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "80vw", borderRadius: "20px 20px 20px 20px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingX: "2rem", paddingY: "3rem" }}>
              <Grid  container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#007E66", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
              <Grid container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: 600 }}> <span style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem" }}><MapIcon/></span>View Property Maps</Typography>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Button sx={{ background: "#FFB20C", borderRadius: "20px", color: "black", paddingX: "1.5rem", fontWeight: 700, fontSize: 12.5 }} variant="contained">View Property Full Details</Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ paddingTop: 1, paddingBottom: 3, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "80vw", borderRadius: "20px 20px 20px 20px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingX: "2rem", paddingY: "3rem" }}>
              <Grid  container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#007E66", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
              <Grid container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: 600 }}> <span style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem" }}><MapIcon/></span>View Property Maps</Typography>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Button sx={{ background: "#FFB20C", borderRadius: "20px", color: "black", paddingX: "1.5rem", fontWeight: 700, fontSize: 12.5 }} variant="contained">View Property Full Details</Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ paddingTop: 1, paddingBottom: 3, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "80vw", borderRadius: "20px 20px 20px 20px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingX: "2rem", paddingY: "3rem" }}>
              <Grid  container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#007E66", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
              <Grid container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: 600 }}> <span style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem" }}><MapIcon/></span>View Property Maps</Typography>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Button sx={{ background: "#FFB20C", borderRadius: "20px", color: "black", paddingX: "1.5rem", fontWeight: 700, fontSize: 12.5 }} variant="contained">View Property Full Details</Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ paddingTop: 1, paddingBottom: 3, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "80vw", borderRadius: "20px 20px 20px 20px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingX: "2rem", paddingY: "3rem" }}>
              <Grid  container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#007E66", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
              <Grid container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: 600 }}> <span style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem" }}><MapIcon/></span>View Property Maps</Typography>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Button sx={{ background: "#FFB20C", borderRadius: "20px", color: "black", paddingX: "1.5rem", fontWeight: 700, fontSize: 12.5 }} variant="contained">View Property Full Details</Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ paddingTop: 1, paddingBottom: 5, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "80vw", borderRadius: "20px 20px 20px 20px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingX: "2rem", paddingY: "3rem" }}>
              <Grid  container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={2}>
                  <Stack spacing={5}>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }} variant="body1">Property type</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "14px" }} variant="body1">Amaia Laguna</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#007E66", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
              <Grid container>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: 600 }}> <span style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem" }}><MapIcon/></span>View Property Maps</Typography>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} item xs={6}>
                  <Button sx={{ background: "#FFB20C", borderRadius: "20px", color: "black", paddingX: "1.5rem", fontWeight: 700, fontSize: 12.5 }} variant="contained">View Property Full Details</Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default App;
