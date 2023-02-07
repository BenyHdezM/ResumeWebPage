import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCmqqoYYjcceK_UA2cX2XoOg&maxResults=20&key=AIzaSyAaxGEBeYwTovjG344p447DH3iEzv_SBJc`
        )
            .then((res) => res.json())
            .then((data) => {
                setVideos(data.items);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <Container>
            <h1 className="text-center my-5">My Youtube Videos</h1>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    {videos.map((video) => (
                        <Col md={4} className="mb-5">
                            <Card key={video.id.videoId}>
                                <Card.Img variant="top" src={video.snippet.thumbnails.high.url} />
                                <Card.Body>
                                    <Card.Title>{video.snippet.title}</Card.Title>
                                    <Card.Text>{video.snippet.description}</Card.Text>
                                    <a
                                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Watch on Youtube
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Videos;
