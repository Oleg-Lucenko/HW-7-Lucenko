interface DataTemplate1 {
    [item: number | string]: number;
};

interface DataTemplate2 {
    [item: string]: ((a: any) => void) | ((a: any) => number);
};

interface DataTemplate3 {
    [item: number]: string;
};

interface DataTemplate4 {
    description: string,
    [additionalProperty: number]: string | number | boolean
};

interface DataTemplate5 {
    [item: string]: string | number;
};

interface PossibleVariant5 extends DataTemplate5 {
    description: string;
};

interface ObjectWidthIndexSignature  {
    [key: number | string]: any;
}

function checkKeysNumbers(obj: ObjectWidthIndexSignature) {
    let allKeys: any[] = Object.keys(obj);
    let nanKeys: any[] = allKeys.filter(key => isNaN(Number(key)));
    return (nanKeys.length === 0 ? 'Keys of this object are only numbers' : `This keys are not a numbers: ${[nanKeys]}`);
};





