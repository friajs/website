import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import BackgroundImage from "./background-image"
import Hidden from "@material-ui/core/Hidden"
import Header from "./new-header";

const Hero = () => {
    return (
        <BackgroundImage filename="friajs-hero.jpg">
            <Header />
        </BackgroundImage>
    )
}

export default Hero
