const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;



// Sets up session and connect to our Sequelize db
const sess = {
    secret: 'Super secret secret',
    // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
    cookie:{},
    resave: false,
    saveUninitialized: true,
    // Sets up session store
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
  app.use(session(sess));
  
  const hbs = exphbs.create({ helpers:{
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
    }
 });
  
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(
        `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
      )
    );
  });
  