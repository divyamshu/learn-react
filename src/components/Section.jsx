export default function Section({ id, title, children, ...props }) {
    return (
        <section id={id} {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}