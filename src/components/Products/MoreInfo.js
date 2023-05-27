export default function MoreInfo({ filtred }) {
    console.log(filtred);

    return (
        <>
            <p>{filtred.id}</p>
            <p>{filtred.name}</p>
            <p>{filtred.type}</p>
            <p>{filtred.description}</p>
            <p>{filtred.imageUrl}</p>
            <p>{filtred.alt}</p>
        </>
    );
}