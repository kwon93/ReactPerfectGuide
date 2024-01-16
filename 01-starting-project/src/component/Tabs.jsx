export default function Tabs({ children, buttons, buttonsContainer }) {
    const ButtonContatiner = buttonsContainer;
    return (
        <>
            <ButtonContatiner>{buttons}</ButtonContatiner>
            {children}
        </>
    );
}
