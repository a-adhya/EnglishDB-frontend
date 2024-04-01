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
    <div className="db-info">
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
      <p>This database is designed to manage a music store's inventory and transactions. 
        It consists of tables that represent artists, albums, tracks, genres, media types, playlists, customers, employees, invoices, and invoice items. 
        Information about artists and their albums is stored in the `artists` and `albums` tables respectively, with a relationship indicating which albums belong to which artist. 
        The `tracks` table contains detailed information about each music track including its album, media type, and genre. 
        Customer information is tracked along with the employees who support them. 
        Transactions are recorded as invoices with corresponding invoice items detailing each purchased track. 
        The database supports the concept of playlists, which are collections of tracks.</p>
    </div>
  );
}

function CarSalesDBInfo()
{
  return (
    <div>
      <h1>Car Sales DB</h1>
      <p>This database is designed for the automotive industry, encompassing the sales and manufacturing aspects of cars. It contains tables for Customers, Car_Vins (which include specific cars' information), Car_Options (detailing the customization options for cars), Car_Parts (for individual car components), Brands (car brands), Models (specific car models from those brands), Customer_Ownership (records of customers' car purchases), Manufacture_Plant (information on manufacturing plants), Dealers (car dealerships), and Dealer_Brand (the brands each dealer is associated with). The database captures essential relations such as which customer owns what car, how cars are configured, and the supply chain for car parts.</p>
    </div>
  );
}

function ProductsDBInfo()
{
  return (
    <div>
      <h1>Products DB</h1>
      <p>This database is a simplified retail management system, encompassing information about products, orders, employees, customers, suppliers, and shipping details. It has seven tables: Categories (catalog of product categories), Customers (details of customers), Employees (employee details), Shippers (shipping companies information), Suppliers (product suppliers information), Products (details of products including their suppliers and categories), and Orders along with OrderDetails (to link orders with the specific products and their quantities). This structure supports the storage and retrieval of detailed relational data concerning the sales, supply, and logistics aspects of a business.</p>
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
