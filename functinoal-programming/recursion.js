const deepPick = (fieldpath, object = {}) => {
    const [first, ...remaining] = fieldpath.split(".")
    return remaining.length 
    ? deepPick(remaining.join("."), object[first])
    : object[first]
};

const testobj = {
    data: {
        info: {
            fullname: {
                first: "steve",
                last: "jobs"
            }
        }
    }
};

console.log(deepPick("data.info.fullname.first", testobj));
