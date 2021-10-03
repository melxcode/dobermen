import "./App.css";
import { Button, Box } from "@material-ui/core";

function App() {
  const handleOpenLink = (link) => {
    window.open(link);
  };
  const isDesktop = window.innerWidth > 600;

  const mainPhotoUrl = isDesktop
    ? "https://i.ibb.co/VjSbbWw/web.png"
    : "https://i.ibb.co/Mkj41xg/webmobile.png";
  const mainPhotoSize = isDesktop ? 1200 : 400;

  const iconSize = isDesktop ? "65" : "30";

  const buyBottonStyles = isDesktop
    ? {
        background: "black",
        color: "white",
        fontSize: "16px",
        marginTop: "-330px",
        marginLeft: "302px",
        fontWeight: "bolder",
        fontFamily: "sans-serif",
        width: "300px",
        heigth: "50px",
      }
    : {
        background: "black",
        color: "white",
        fontSize: "16px",
        marginTop: "-125px",
        marginLeft: "108px",
        fontWeight: "bolder",
        fontFamily: "sans-serif",
        width: "177px",
        heigth: "29px",
      };

  const socialLinks = {
    discord: {
      link: "https://discord.com/invite/z3PbKfPwHh",
      icon: "https://i.ibb.co/cN3tHCC/19-196922-social-media-computer-icons-discord-computer-servers-discord.png",
    },
    twitter: {
      link: "https://twitter.com/DobermenclubN",
      icon: "https://i.ibb.co/K92JfBz/twitter.png",
    },
    instagram: {
      link: "https://www.instagram.com/dobermenclub.nft/",
      icon: "https://i.ibb.co/WgMMCYK/instagram.png",
    },
    openSea: {
      link: "https://opensea.io/collection/the-dobermen-club",
    },
  };

  return (
    <Box className="App">
      <Box>
        <Box>
          <Box
            className="App-logo"
            style={isDesktop ? {} : { marginBottom: "190px" }}
          >
            <img src="https://i.ibb.co/QN1vsRd/logoweb.png" alt="logo" />
          </Box>
          <Box>
            <img width={mainPhotoSize} src={mainPhotoUrl} alt="hero" />
            <Box className={isDesktop ? "social" : "social-mobile"}>
              <img
                height={iconSize}
                onClick={() => {
                  handleOpenLink(socialLinks.twitter.link);
                }}
                width={iconSize}
                className="social-img"
                src={socialLinks.twitter.icon}
                alt="media"
              />
              <img
                height={iconSize}
                onClick={() => {
                  handleOpenLink(socialLinks.discord.link);
                }}
                className="social-img"
                width={iconSize}
                src={socialLinks.discord.icon}
                alt="media"
              />
              <img
                height={iconSize}
                onClick={() => {
                  handleOpenLink(socialLinks.instagram.link);
                }}
                className="social-img"
                width={iconSize}
                src={socialLinks.instagram.icon}
                alt="media"
              />
            </Box>
          </Box>
        </Box>
        <Button
          style={buyBottonStyles}
          onClick={() => {
            handleOpenLink(socialLinks.openSea.link);
          }}
        >
          Buy on Opensea
        </Button>
      </Box>
      <Box
        style={{
          background: "black",
        }}
      ></Box>
    </Box>
  );
}

export default App;
