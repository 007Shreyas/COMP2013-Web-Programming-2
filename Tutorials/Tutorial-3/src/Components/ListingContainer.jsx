// This component will render a list of Listing components, passing the necessary props to each one.
import Listing from "./Listing";
export default function ListingContainer({ items }) {
  return (
    // use the map method to iterate over the items array and render a Listing component for each item
    <div className="ListingContainer">
      {items.map((item) => (
        <Listing key={item.id} {...item} />
      ))}
    </div>
    // <div className="ListingContainer">
    //   {items.map((item) => (
    //     <Listing
    //       key={item.id}
    //       pic={item.pic}
    //       country={item.country}
    //       location={item.location}
    //       rating={item.rating}
    //       price={item.price}
    //     />
    //   ))}
    // </div>
  );
}
//NOT RECOMMENDED to use foreach method to iterate over the items array and render a Listing component for each item instead use the map method
// export default function ListingContainer({ items }) {
//     const listings = [];
//     items.forEach((item) => {
//       listings.push(<Listing key={item.id} {...item} />);
//     });
//     return (
//       <div className="ListingContainer">
//         <h1>Resorts</h1>
//         {listings}
//       </div>
//     );
//   }