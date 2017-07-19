export class DemoData {
    constructor(public name: string, public group: string, public rank: number) { }
}

export const exampleDatas = () => {
    return [
        new DemoData('employee1', 'programmer', 5),
        new DemoData('employee2', 'programmer', 20),
        new DemoData('employee3', 'sa', 15),
        new DemoData('employee4', 'pm', 25),
        new DemoData('employee5', 'tester', 10),
        new DemoData('employee6', 'programmer', 5),
        new DemoData('employee7', 'programmer', 20),
        new DemoData('employee8', 'sa', 15),
        new DemoData('employee9', 'pm', 25),
        new DemoData('employee10', 'tester', 10)
    ]
}
