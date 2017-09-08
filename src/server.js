import express from 'express';
import bodyParser from 'body-parser';
import TrainPlanner from './TrainPlanner';

const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.listen(process.env.PORT || 8080, () => {
  console.log('server started using port 8080');
});

app.use('/trainPlanner/evaluate', (req, res) => {
  console.log(req.body);
  const trainPlanner = new TrainPlanner(req.body);
  const output = trainPlanner.getBusiestRoute(req.body.destination);
  console.log(req.body);
  res.json(output);
/*  res.json({
    "line": "purple",
    "totalNumOfPassengers": 220,
    "reachingVia": "Serangoon"
  });*/
});

app.use('/', (req, res) => {
  res.send('Welcome to codeit stars home page. Please call /{problemname}/evaluate to test our solutions');
});


