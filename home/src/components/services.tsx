import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = () => {
  let services = [
    {
      id: 1,
      image: "search-doctor-icon.png",
      title: "El Conversatorio",
      description:
        "",
    },
    {
      id: 2,
      image: "online-pharmacy-icon.png",
      title: "El Brew",
      description:
        "",
    },
    {
      id: 3,
      image: "consultation-icon.png",
      title: "El Cuadrilátero",
      description:
        "",
    },
    {
      id: 4,
      image: "details-info-icon.png",
      title: "Actividades Internacionales",
      description:
        "",
    },
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Formatos De Evento</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
          Nuestros formatos de evento son las herramientas con las que logramos interacción
          saludable entre los miembros de nuestra comunidad
        </Typography>
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={6} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

    </Grid>
  )
}
export default Services
