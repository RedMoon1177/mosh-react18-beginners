import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

// Managing Component State - lesson 13 ///////
function App() {
  return (
    <>
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        cupiditate quaerat consectetur eaque unde corrupti recusandae. Unde
        doloribus, aperiam vero aut molestias magni quisquam aliquid adipisci
        excepturi corporis delectus similique cupiditate ducimus rem illum
        repellat consectetur deserunt exercitationem at reprehenderit enim natus
        recusandae quis ad. Temporibus ducimus soluta laudantium. Quo blanditiis
        quae tempora reprehenderit iusto nam obcaecati ea nemo expedita magnam,
        qui unde, exercitationem vitae quasi voluptatibus maiores ducimus
        molestias quam voluptas in sapiente architecto consequatur! Dolore,
        quidem perspiciatis sapiente libero doloribus qui sequi cumque facere
        delectus ratione odit vitae dolorem provident quae non corrupti aperiam
        accusamus earum voluptatibus atque.
      </ExpandableText>
    </>
  );
}

// Managing Component State - lesson 12 ///////
// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });

//   const handleClick = () => {
//     setGame({ ...game, player: { ...game.player, name: "Bob" } });
//   };
//   return <></>;
// }

// Managing Component State - lesson 11 ///////
// function App() {
//   const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }

// Managing Component State - lesson 10 ///////
// import produce from "immer";

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

//     setBugs(
//       // draft: a proxy object that record the changes that we're going to apply to the bugs array.
//       // Imagine draft is the copy of the bugs array.
//       // So we can use produce with draft to mutate the state as we used map() func
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// Managing Component State - lesson 9 ///////
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// Managing Component State - lesson 8 ///////
// function App() {
//   const [tags, setTags] = useState(["happy", "cheerful"]);

//   const handleClick = () => {
//     // Add
//     setTags([...tags, "exciting"]);

//     // Remove
//     setTags(tags.filter((tag) => tag !== "happy"));

//     // Update
//     setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// Managing Component State - lesson 7 ///////
// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "San Francisco",
//       zipCode: 94111,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 94112 },
//     });
//   };

//   return <div></div>;
// }

// Managing Component State - lesson 6 ///////
// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, price: 6 });
//   };

//   return (
//     <div>
//       {drink.price}
//       <br />
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

export default App;
