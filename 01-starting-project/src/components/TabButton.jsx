// export default function TabButton(props) {
//   return (
//     <li>
//       <button onClick={props.onSelect}>{props.children}</button>
//     </li>
//   );
// }

export default function TabButton({children, onSelect, onSelected}) {
  return (
    <li>
      <button className={onSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}

