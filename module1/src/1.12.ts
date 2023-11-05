{
    //nullable type/unknown type

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        } else {
            console.log("There is no searching");
        }
    }
    searchName(null)

    //unknown typeof

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            // console.log(`The speed is ${convertedSpeed} ms`);
        }

        if (typeof value === "string") {
            const [result, unit] = value.split(' ')

            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms`);
        } else {
            console.log("wrong speed");
        }
    }

    getSpeedInMeterPerSecond(null)

    //never

    const throwError = (msg: string): never => {
        throw new Error(msg)
    }

    // throwError('Error hoye geche')





    //
}