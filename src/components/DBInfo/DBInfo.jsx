import React from 'react';
import '../../styles.css'

function DBInfo({ database }) {
  
  const renderDatabaseInfo = () => {
    switch (database) {
      case 'Media DB':
        return <MediaDBInfo />;
      case 'Car Sales DB':
        return <CarSalesDBInfo />;
      case 'Products DB':
        return <ProductsDBInfo />;
      default:
        return <Home/>;
    }
  };

  if (!database) return <Home/>;
  
  return (
    <div>
      {renderDatabaseInfo(database)}
    </div>
  );
}

//Database Information Components
//Media DB Info
function MediaDBInfo()
{
  return (
    <div>
      <h1>Media DB</h1>
      <p>This is the Media DB</p>
    </div>
  );
}

function CarSalesDBInfo()
{
  return (
    <div>
      <h1>Car Sales DB</h1>
      <p>This is the Car Sales DB</p>
    </div>
  );
}

function ProductsDBInfo()
{
  return (
    <div>
      <h1>Products DB</h1>
      <p>This is the Products DB</p>
    </div>
  );
}

function Home()
{
  return (
    <div>
      <h1>Welcome!</h1>
      <p> This is a tool designed to make database querying easier with the help of AI.<br></br>
       Select one of the pre-existing databases above to learn more about each database, and type 
       in any question you have about the database in English. <br></br>You can ask about the structure of the 
       database, or questions about the data itself, and EnglishDB will generate a SQL query based on your 
       question, run that against the database, and provide you the tabular result of your query. 
       <br></br>The end goal of this project is to allow users to upload their own database and schemas.</p>
    </div>
  );
}

export default DBInfo;
