

export default function MoreInfo ({
    id,
    name,
    type,
    description,
    imageUrl,
    alt
}) {
    return (
        <>
            <p>{id}</p>
            <p>{name}</p>
            <p>{type}</p>
            <p>{description}</p>
            <p>{imageUrl}</p>
            <p>{alt}</p>
        </>
    );
}