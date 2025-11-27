const List = () => {
    const item = [{
        id: 1,
        name: "Marlon",
    },
    {
        id: 2,
        name: "Vitor",
    },
    {
        id: 3,
        name: "João",
    }]


    return (
        <div>
            {item.map((item) =>(
                <p key={item.id}>
                    {item.name}
                </p>
            ))}
        </div>
    )
}

export default List;