const storeData = (key: string,data: any ) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const readData = (key: string): any => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
};


export {
    readData,
    storeData
}