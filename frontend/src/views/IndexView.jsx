import { Container, Typography } from "@mui/material";
import SolarSystem from "../components/solar-system/SolarSystem";

const IndexView = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi 👋. Welcome back!
        </Typography>
      </Container>

      <SolarSystem />
    </>
  );
};

export default IndexView;
