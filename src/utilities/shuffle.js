const Shuffle = ()=>{
    const assets = [
        {image : "/assets/c-.png"},
        {image : "/assets/css-3.png"},
        {image : "/assets/html.png"},
        {image : "/assets/js.png"},
        {image : "/assets/node-js.png"},
        {image : "/assets/physics.png"},
        {image : "/assets/python.png"},
        {image : "/assets/typescript.png"},

    ]
    return [...assets,...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id : Math.random()}))
}

export default Shuffle