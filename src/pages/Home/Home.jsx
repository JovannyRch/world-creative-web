import { Card, CardContent, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardCover } from "@mui/joy";


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
]

const HomePage = () => {
    return (
        <Layout>
            <Carousel responsive={responsive} >
                {
                    linkVideos.map((item) => (<Card component="li" key={item.title} sx={{ minWidth: 300, height: 400, flexGrow: 1, paddingX: 10 }}>
                        <CardCover>
                            <iframe width="560" height="315" src={item.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </CardCover>
                        <CardContent>
                            <Typography
                                level="h6"
                                fontWeight="lg"
                                textColor="#fff"
                                mt={{ xs: 12, sm: 18 }}
                            >
                                Video lajsdljsa
                                Officia dolore magna irure tempor ipsum excepteur veniam aute id incididunt ex aute. Consequat ea mollit elit proident qui qui voluptate sint est amet veniam velit sint deserunt. In ut id fugiat in dolor ullamco aute.
                            </Typography>
                        </CardContent>
                    </Card>))
                }

            </Carousel>
        </Layout>
    )
}

export default HomePage