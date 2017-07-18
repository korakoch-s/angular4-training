export class DemoData {
    constructor(public name: string, public group: string, public rank: number) {}
}

export const exampleDatas = () => {
    return [
    new DemoData('employee1', 'programmer', 10),
    new DemoData('employee2', 'programmer', 20),
    new DemoData('employee3', 'sa', 10),
    new DemoData('employee4', 'pm', 10),
    new DemoData('employee5', 'tester', 10)
]
}
