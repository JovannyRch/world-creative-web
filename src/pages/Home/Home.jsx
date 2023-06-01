import { Card, CardContent, Grid, Paper, Typography, styled } from "@mui/material";
import Layout from "../../components/Layout/Layout"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardCover } from "@mui/joy";
import styles from './styles.module.scss';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const casosDeExito = [
    {
        title: 'Steve Jobs',
        description: `El famoso fundador de Apple trabajó en un inicio para Atari. En 1976 conoció al programador Steve Wozniak, y juntos crearon, desde un garaje, las computadoras Apple.
        En 1984 diseñaron la primera Macintosh, la computadora personal que usaba una interfaz gráfica. A pesar de sus innovaciones, Jobs renunció a Apple. Tras esto, creó Next Computers, que Apple compró más tarde por 429 millones de dólares, con lo cual Jobs regresó a la compañía como director ejecutivo.`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1024px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
    },
    {
        title: 'Bill Gates',
        description: `Bill Gates se matriculó en la Universidad de Harvard, posteriormente abandonó sus estudios y junto con Steve Ballmer creó Microsoft, en 1976. Después, se asociaron con algunos negocios para obtener el capital que necesitaban con el fin de fabricar sus propios productos y software. 

        En 1980, IBM se acercó a Microsoft y les pidió que desarrollaran un código para su computadora BASIC. Así se creó MS-DOS y esto convirtió a Microsoft en una figura sobresaliente en la industria, en el estándar en tecnología informática y en uno de los negocios más relevantes del mundo.`
        , image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    },
    {
        title: 'Roger L. Easton',
        description: `Roger L. Easton es el principal inventor y diseñador del Sistema de Posicionamiento Global (GPS), que desarrolló junto con Ivan A. Getting y Bradford Parkinson.

        Easton trabajó como físico en el Laboratorio de Investigación Naval de Estados Unidos y, a finales de la década de 1950, ayudó a crear el Sistema de Vigilancia Espacial Naval y el Proyecto Vanguard, que lanzó el primer satélite con energía solar y creó el primer sistema para detectar y rastrear todo tipo de objetos en la órbita terrestre.
        
        Poco después, Easton dirigió un conjunto de tecnologías esenciales para el Sistema de Posicionamiento Global (GPS).  `,
        image: 'https://tinkers.es/wp-content/uploads/roger_l_easton.jpg'
    },
    {
        title: 'Tim Berners-Lee',
        description: `Tim Berners-Lee nació el 8 de junio de 1955 en Londres, Inglaterra. Es un importante informático reconocido como el inventor de la World Wide Web. La informática fue algo natural para él, ya que sus padres trabajaban en el Ferranti Mark I, la primera computadora comercial. Estudió en la Universidad de Oxford y se graduó en 1976.
`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg',
    },
    {
        title: 'Larry Page ',
        description: `Hijo de expertos en computación e inteligencia artificial, Larry Page fundó el famoso y más popular buscador: Google, con el propósito de organizar la información existente en la web y hacerla accesible para todo el mundo.

        Él y Serguéi Brin abandonaron sus estudios en Stanford debido a la popularidad que obtuvo el motor de búsqueda, en ese entonces llamado Googol, y crearon la compañía Google.`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/800px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg'

    }

]


const linkVideos = [
    {
        link: 'https://www.youtube.com/embed/gcbl9RXUqrs',
        title: 'Video 1'
    },
    {
        link: 'https://www.youtube.com/embed/Li0AOfGKmg4',
        title: 'Video 2'
    },
    {
        link: 'https://www.youtube.com/embed/ga6gI0Pewto',
        title: 'Video 3'
    },
    {
        link: 'https://www.youtube.com/embed/kofy-z0y0iA',
        title: 'Video 4'
    },
    {
        link: 'https://www.youtube.com/embed/Mad7KWEe8wQ',
        title: 'Video 5'
    },
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 500,
}));

const HomePage = () => {
    return (
        <Layout>
            <Carousel responsive={responsive} itemClass={styles['item-class']} infinite  >
                {
                    linkVideos.map((item) => (<Card component="li" key={item.title} sx={{ width: 500, height: 350, flexGrow: 1, paddingX: 10 }}>
                        <CardCover>
                            <iframe width="428" height="200" src={item.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </CardCover>

                    </Card>))
                }

            </Carousel>

            {/* Show title: Casos de exito */}
            <Typography variant="h4" gutterBottom component="div" style={{ marginTop: 100, }}>
                Casos de éxito
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: 20, }}>
                {casosDeExito.map((caso, index) => (
                    <Grid item xs={8} sm={4} md={4} key={index}>
                        <Item>
                            {/* <img src={caso.image} alt={caso.title} style={{ width: '100%' }} /> */}
                            {/* Show image as a div from url */}
                            <div style={{ backgroundImage: `url(${caso.image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 200 }}></div>
                            <Typography variant="h6" gutterBottom component="div">
                                {caso.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {caso.description}
                            </Typography>

                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}

export default HomePage