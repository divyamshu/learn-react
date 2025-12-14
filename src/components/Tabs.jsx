// export default function Tabs({children, buttons}) {
//     return (<>
//         <menu>
//             {buttons}
//         </menu>
//         {children}
//     </>)
// }

export default function Tabs({children, buttons, ButtonContainer}) {
    return (<>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>)
}