 const OBJ1 = new Set([1,2,3]);
        const OBJ2 = new Set([4,3,2])

        const ONION = new Set([...OBJ1].filter((x) => !OBJ2.has(x)))
        console.log(ONION)

        const DIFFERENT = new Set([...OBJ1,...OBJ2]);
        console.log(DIFFERENT)