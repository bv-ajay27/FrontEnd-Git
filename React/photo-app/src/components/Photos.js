import React, { useEffect } from "react";
import axios from "axios";
import { Card, Row} from 'react-bootstrap'

const Photos = () => {
    // fetching API by using useEffect method
    useEffect(() => {
        //by using promise

        // axios.get('https://picsu.photos/v2/list')
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err))

        //by using async & await
        const getPhotos = async () =>{
            try{
                const res = await axios.get('https://picsu.photos/v2/list')
                console.log(res.data)
            }
            catch (err){
                console.log(err)
            }
        }
        getPhotos();
    },[]);
    return (
      <>
        <Row>
          <Card>
            <Card.Header>{Photos.author}</Card.Header>
                <Card.Img
                    variant="top"
                    src={Photos.download_url}
                    className="photo-img"
                    />
            <Card.Body>
              <a className="btn btn-danger" href={Photos.url}>
                View Source
              </a>
            </Card.Body>
          </Card>
        </Row>
      </>
    );
}

export default Photos