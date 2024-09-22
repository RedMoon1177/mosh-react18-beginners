import { useState } from "react";
import styles from "./ListGroup.module.css"; // when renaming to module.css file => we can import all the styles as a JS object
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "pink" : "none")};
`;

interface ListItemProps {
  active: boolean;
}

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0; // this is a local variable and will not be changed its value after ListGroup() is called.
  // => use hook to manage global states which will be changed over time.

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found.</p>}
      <List className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
