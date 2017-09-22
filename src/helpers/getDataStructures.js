function findDataStructures(result) {
    if (!result.meta || !result.meta.classes || !result.meta.classes.includes('dataStructures')) {
        if (Array.isArray(result.content)) {
            return result.content.map(it => findDataStructures(it)).filter(it => Boolean(it))[0];
        }

        return null;
    }

    return result;
}


export default function getDataStructures(result) {
    return findDataStructures(result).content.map(entry => entry.content[0]);
}
