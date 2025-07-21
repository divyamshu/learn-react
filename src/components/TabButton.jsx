export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}

// export default function TabButton({children, onSelect}) {
//   return (
//     <li>
//       <button onClick={onSelect}>{children}</button>
//     </li>
//   );
// }

