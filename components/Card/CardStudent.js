import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css"

export default function CardStudent() {
  return (
    <>
      <div className="counsellor_cards">
        <div className="counsellor_card1">
          <Card sx={{ maxWidth: 345, maxHeight: 200 }}>
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="h5" component="div">
                Lince Varghese
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>
                  SJC18CS071
                  <br />
                  S7 CSE A <br />
                  
                </h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW PROFILE</Button>
              <Button size="small">COMPLETED</Button>
            </CardActions>
          </Card>
        </div>
        <div className="counsellor_card2">
          <Card sx={{ maxWidth: 345, maxHeight: 200 }}>
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="h5" component="div">
                David P Joseph
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>
                  SJC18CS071
                  <br />
                  S7 CSE A <br />
                  
                </h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW PROFILE</Button>
              <Button size="small">COMPLETED</Button>
            </CardActions>
          </Card>
        </div>
        <div className="counsellor_card3">
          <Card sx={{ maxWidth: 345, maxHeight: 200 }}>
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="h5" component="div">
                Roshan Thomas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>
                  SJC18CS071
                  <br />
                  S7 CSE A <br />
                </h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW PROFILE</Button>
              <Button size="small">COMPLETED</Button>
            </CardActions>
          </Card>
        </div>
        <div className="counsellor_card4">
          <Card sx={{ maxWidth: 345, maxHeight: 200 }}>
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="h5" component="div">
                George T Saju
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>
                  SJC18CS071
                  <br />
                  S7 CSE A <br />
                  
                </h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW PROFILE</Button>
              <Button size="small">COMPLETED</Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div className="counsellor_cards2">
        <div className="counsellor_card5">
          <Card sx={{ maxWidth: 345, maxHeight: 200 }}>
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="h5" component="div">
                Mathew Varghese
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>
                  SJC18CS071
                  <br />
                  S7 CSE A <br />
                  
                </h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW PROFILE</Button>
              <Button size="small">COMPLETED</Button>
            </CardActions>
          </Card>
        </div>
        <div className="counsellor_card6">
          <Card sx={{ maxWidth: 345, maxHeight: 200 }}>
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="h5" component="div">
                Akash Vijayan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>
                  SJC18CS071
                  <br />
                  S7 CSE A <br />
                  
                </h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW PROFILE</Button>
              <Button size="small">COMPLETED</Button>
            </CardActions>
          </Card>
        </div>
        <div className="counsellor_card7">
          <Card sx={{ maxWidth: 345, maxHeight: 200 }}>
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="h5" component="div">
                Lince Varghese
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>
                  SJC18CS071
                  <br />
                  S7 CSE A <br />
                  
                </h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW PROFILE</Button>
              <Button size="small">COMPLETED</Button>
            </CardActions>
          </Card>
        </div>
        <div className="counsellor_card8">
          <Card sx={{ maxWidth: 345, maxHeight: 200 }}>
            <CardContent sx={{ maxHeight: 100 }}>
              <Typography gutterBottom variant="h5" component="div">
                 Christo Shaji 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>
                  SJC18CS071
                  <br />
                  S7 CSE A <br />
                  
                </h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW PROFILE</Button>
              <Button size="small">COMPLETED</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}