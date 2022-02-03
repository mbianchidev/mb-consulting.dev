export function getServerSideProps(ctx){
    return {
        props: {
            slug: ctx.params.slug,
        }
    }
}

export default function Service(props) {
    return (
        <div>
            <h1>Service</h1>
            <h2>{props.slug}</h2>
        </div>
    );
}